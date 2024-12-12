import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(({ theme }) => ({
  container: {
    height: 120,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    borderRadius: 12,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  image: {
    height: 104,
    width: 116,
    backgroundColor: theme.colors.gray[200],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.gray[600],
  },
  description: {
    fontSize: 12,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.gray[500],
  },
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10,
  },
  tickets: {
    fontSize: 12,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.gray[400],
  },
}));
