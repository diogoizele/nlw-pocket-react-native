import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";
import { isSmallDevice } from "@/utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1,
    gap: isSmallDevice ? 2 : 4,
  },
  title: {
    fontSize: isSmallDevice ? 15 : 16,
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
    width: "100%",
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
