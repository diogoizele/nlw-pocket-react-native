import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import { isSmallDevice } from "@/utils/dimensions";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
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
