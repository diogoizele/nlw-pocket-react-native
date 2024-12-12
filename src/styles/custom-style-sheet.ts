import { StyleSheet } from "react-native";

import { isSmallDevice } from "@/utils/dimensions";
import { colors, fontFamily } from "@/styles/theme";

const CONSTANT_PROPS = {
  isSmallDevice,
  theme: { colors, fontFamily },
};

type CustomStyleSheetCallback<T> = (
  props: typeof CONSTANT_PROPS
) => T & StyleSheet.NamedStyles<any>;

export function customStyleSheet<T extends StyleSheet.NamedStyles<T>>(
  callback: CustomStyleSheetCallback<T>
) {
  return StyleSheet.create(callback(CONSTANT_PROPS));
}
