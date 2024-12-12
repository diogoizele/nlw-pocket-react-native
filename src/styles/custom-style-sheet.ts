import { StyleSheet } from "react-native";

import { isSmallDevice } from "@/utils/dimensions";

type CustomStyleSheetProps = {
  isSmallDevice?: boolean;
};

type CustomStyleSheetCallback<T> = (props: CustomStyleSheetProps) => T;

const CONSTANT_PROPS = {
  isSmallDevice,
};

export function customStyleSheet<T extends StyleSheet.NamedStyles<T>>(
  callback: CustomStyleSheetCallback<T>
) {
  return StyleSheet.create(callback(CONSTANT_PROPS));
}
