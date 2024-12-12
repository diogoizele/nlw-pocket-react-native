import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";
import { isSmallDevice } from "@/utils/dimensions";

export const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: isSmallDevice ? 16 : 24,
    marginBottom: isSmallDevice ? 18 : 28,
  },
  title: {
    fontSize: isSmallDevice ? 20 : 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  subtitle: {
    fontSize: isSmallDevice ? 14 : 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: isSmallDevice ? 8 : 12,
  },
});
