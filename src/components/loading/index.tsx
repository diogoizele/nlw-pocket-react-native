import { ActivityIndicator } from "react-native";

import { colors } from "@/styles/theme";

import { styles } from "./styles";

export default function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color={colors.gray[500]}
      style={styles.container}
    />
  );
}
