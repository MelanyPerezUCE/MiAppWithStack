import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla Home</Text>
      <Button
        title="Ir a Details"
        onPress={() => router.push("/stack/details")}
      />
    </View>
  );
}
