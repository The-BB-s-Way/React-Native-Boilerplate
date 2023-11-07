import { View, Text, ActivityIndicator, Image } from "react-native";
import { Constants } from "../constants/Constants";

const SplashScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: Constants.COLORS.Primary }}>
        <Image source={require('../../assets/images/logo.png')} style={{
            width: 200,
            height: 200,
            marginBottom: 30,
        }}/>
        <ActivityIndicator size="large"  color={Constants.COLORS.White}/>
      </View>
    );
}
  
export default SplashScreen;