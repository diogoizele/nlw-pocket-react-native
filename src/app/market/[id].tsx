import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Market() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1 }}>
      <Text>Market {id}</Text>
    </View>
  );
}
