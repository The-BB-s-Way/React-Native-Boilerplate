import { Button, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';
import { Constants } from "../../../constants/Constants";
import Logo from '../../../../assets/images/logo-cdf-blu.svg';
import { useSelector } from "react-redux";
import { RootState } from "../../../../App";
import { useEffect } from "react";

const ProductDetail2 = ({ navigation }: { navigation: any }) => {
    const data: any = useSelector(
        (state: RootState) => state.data.data
    );

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
                <Text style={{
                    color: Constants.COLORS.Primary,
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 20,
                }}>
                    Product Detail 2
                </Text>
                {
                    data && (
                        <View style={{
                            marginTop: 20,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginBottom: 10,
                            }}>
                                {data.title}
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                marginBottom: 10,
                            }}>
                                {data.description}
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                marginBottom: 10,
                            }}>
                                {data.price}
                            </Text>
                        </View>
                    )

                }
            </View>
        </View>
    )
}

export default ProductDetail2;