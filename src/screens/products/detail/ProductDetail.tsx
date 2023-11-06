import { Button, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';
import { Constants } from "../../../constants/Constants";
import Logo from '../../../../assets/images/logo-cdf-blu.svg';

const ProductDetail = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{
            flex: 1,
            display: 'flex',
        }}>
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 20,
            }}>
                <Image
                    source={{ uri: 'https://picsum.photos/id/39/200' }}
                    style={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
                <Logo width={100} height={100} />
                <Text style={{
                    color: Constants.COLORS.Primary,
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 20,
                }}>
                    Product Detail
                </Text>
            </View>
        </View>
    )
}

export default ProductDetail;