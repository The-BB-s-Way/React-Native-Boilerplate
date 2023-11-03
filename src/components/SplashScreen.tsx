import { View, Text, ActivityIndicator } from "react-native";

const SplashScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <Text>Caricamento in corso...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
}
  
export default SplashScreen;