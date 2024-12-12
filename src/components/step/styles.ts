import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ isSmallDevice, theme }) => ({
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
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.gray[500],
    width: "100%",
  },
  description: {
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.gray[500],
  },
}));
