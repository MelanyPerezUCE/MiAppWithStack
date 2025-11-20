import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "Inicio" }} />
      <Stack.Screen name="details" options={{ title: "Detalles" }} />
    </Stack>
  );
}
