import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ theme, isSmallDevice }) => ({
  container: {
    height: 36,
    backgroundColor: theme.colors.gray[100],
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    marginLeft: 8,
    color: theme.colors.gray[500],
    fontFamily: theme.fontFamily.regular,
  },
  containerSelected: {
    backgroundColor: theme.colors.green.base,
    borderColor: theme.colors.green.base,
  },
  nameSelected: {
    color: theme.colors.gray[100],
  },
}));
