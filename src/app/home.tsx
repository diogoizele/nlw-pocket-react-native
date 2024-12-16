import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

import { client } from "@/api";
import { Categories } from "@/components/categories";
import { Places } from "@/components/places";
import { CategoryProps, PlaceProps } from "@/types";
import { colors, fontFamily } from "@/styles/theme";

type UnionPlaceProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

export default function Home() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [category, setCategory] = useState("");
  const [places, setPlaces] = useState<UnionPlaceProps[]>([]);

  async function fetchCategories() {
    try {
      const response = await client.get("/categories");
      setCategories(response.data);
      setCategory(response.data[0].id);
    } catch (error) {
      Alert.alert("Categorias", "Não foi possível carregar as categorias");
    }
  }

  async function fetchPlaces() {
    if (!category) return;

    try {
      const response = await client.get(`/markets/category/${category}`);
      setPlaces(response.data);
    } catch (error) {
      Alert.alert(
        "Estabelecimentos",
        "Não foi possível carregar os estabelecimentos"
      );
    }
  }

  async function getCurrentLocation() {
    try {
      let { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const location = await getCurrentPositionAsync();
        return location.coords;
      }
    } catch (error) {
      Alert.alert("Localização", "Não foi possível recuperar a localização");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPlaces();
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
      <Categories
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />
        {places.map((place) => (
          <Marker
            key={place.id}
            identifier={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            image={require("@/assets/pin.png")}
          >
            <Callout>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.gray[600],
                      fontFamily: fontFamily.medium,
                    }}
                  >
                    {place.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: colors.gray[600],
                      fontFamily: fontFamily.regular,
                    }}
                  >
                    {place.address}
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places places={places} />
    </View>
  );
}
