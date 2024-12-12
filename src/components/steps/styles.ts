import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ isSmallDevice, theme }) => ({
  container: {
    flex: 1,
    gap: isSmallDevice ? 20 : 24,
  },
  title: {
    fontSize: isSmallDevice ? 14 : 16,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.gray[500],
  },
}));
