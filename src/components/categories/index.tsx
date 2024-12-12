import { FlatList } from "react-native";

import { Category } from "@/components/category";
import { CategoryProps } from "@/types";

import { styles } from "./styles";

type CategoriesProps = {
  categories: CategoryProps[];
  selected: string;
  onSelect: (categoryId: string) => void;
};

export function Categories({
  categories,
  selected,
  onSelect,
}: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          isSelected={item.id === selected}
          onPress={() => onSelect(item.id)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
