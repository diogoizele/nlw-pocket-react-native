import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ theme }) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray[100],
  },
}));
