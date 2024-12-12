import { ComponentType } from "react";
import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { colors } from "@/styles/colors";
import { isSmallDevice } from "@/utils/dimensions";

import { styles } from "./styles";

type StepProp = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
};

export function Step({ description, icon: Icon, title }: StepProp) {
  return (
    <View style={styles.container}>
      <Icon size={isSmallDevice ? 32 : 48} color={colors.red.base} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
