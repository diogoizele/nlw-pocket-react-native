import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ isSmallDevice, theme }) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    maxHeight: isSmallDevice ? 52 : 56,
    height: isSmallDevice ? 52 : 56,
    padding: isSmallDevice ? 16 : 18,
    borderRadius: 10,
    backgroundColor: theme.colors.green.base,
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: isSmallDevice ? 16 : 18,
    color: theme.colors.gray[100],
  },
  icon: {
    marginStart: 8,
  },
}));
