import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ isSmallDevice, theme }) => ({
  logo: {
    width: isSmallDevice ? 48 : 56,
    height: isSmallDevice ? 48 : 56,
    marginTop: isSmallDevice ? 16 : 28,
    marginBottom: isSmallDevice ? 18 : 28,
  },
  title: {
    fontSize: isSmallDevice ? 20 : 24,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.gray[600],
  },
  subtitle: {
    fontSize: isSmallDevice ? 14 : 16,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.gray[500],
    marginTop: isSmallDevice ? 8 : 12,
  },
}));
