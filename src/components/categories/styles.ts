import { customStyleSheet } from "@/styles/custom-style-sheet";

export const styles = customStyleSheet(() => ({
  container: {
    maxHeight: 36,
    position: "absolute",
    top: 64,
    zIndex: 1,
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
}));
