import { colors, fontFamily } from "@/styles/theme";
import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ isSmallDevice }) => ({
  container: {
    flex: 1,
    gap: isSmallDevice ? 20 : 24,
  },
  title: {
    fontSize: isSmallDevice ? 14 : 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
}));
