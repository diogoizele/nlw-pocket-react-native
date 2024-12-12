import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import { client } from "@/api";
import { Categories } from "@/components/categories";
import { Places } from "@/components/places";
import { CategoryProps, PlaceProps } from "@/types";

type UnionPlaceProps = PlaceProps & {};

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

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPlaces();
  }, [category]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Categories
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />
      <Places places={places} />
    </View>
  );
}
