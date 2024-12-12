import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";
import { isSmallDevice } from "@/utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: isSmallDevice ? 20 : 24,
  },
  title: {
    fontSize: isSmallDevice ? 14 : 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
