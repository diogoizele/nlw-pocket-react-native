import { colors, fontFamily } from "@/styles/theme";
import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ isSmallDevice }) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: isSmallDevice ? 16 : 20,
    borderRadius: 5,
    backgroundColor: colors.green.base,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: isSmallDevice ? 16 : 18,
    color: colors.gray[100],
  },
}));
