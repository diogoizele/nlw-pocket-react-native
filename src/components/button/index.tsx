import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

function Title() {
  return <Text style={styles.title}>Hello World</Text>;
}

export { Button };
