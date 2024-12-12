import { View, StyleSheet } from "react-native";

import { isSmallDevice } from "@/utils/dimensions";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
      <Button title="Continuar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: isSmallDevice ? 28 : 40,
    gap: isSmallDevice ? 28 : 40,
  },
});
