import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ theme }) => ({
  container: {
    backgroundColor: theme.colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: theme.colors.gray[300],
  },
  title: {
    color: theme.colors.gray[600],
    fontSize: 16,
    fontFamily: theme.fontFamily.regular,
    marginBottom: 16,
  },
}));
