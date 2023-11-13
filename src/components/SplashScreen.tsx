import { View, Text, ActivityIndicator, Image } from "react-native";
import { Constants } from "../constants/Constants";

const SplashScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: Constants.COLORS.cdfBlue }}>
        <Image source={require('../../assets/images/logo-bbs.png')} style={{
            width: 200,
            height: 200,
            marginBottom: 30,
            objectFit: 'contain'
        }}/>
        <ActivityIndicator size="large"  color={Constants.COLORS.White}/>
      </View>
    );
}
  
export default SplashScreen;