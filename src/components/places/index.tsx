import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { PlaceProps } from "@/types";
import { Place } from "@/components/place";
import { styles } from "./styles";

type PlacesProps = {
  places: PlaceProps[];
};

export function Places({ places }: PlacesProps) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place place={item} />}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <Text style={styles.title}>Explore locais perto de você</Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
