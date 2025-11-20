import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla Details</Text>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}
