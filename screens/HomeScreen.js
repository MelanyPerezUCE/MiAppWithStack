import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla Home</Text>
      <Button
        title="Ir a Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
