import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

const Products = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProductDetail')}
                >
                    <Animated.Image
                        source={{ uri: 'https://picsum.photos/id/39/200' }}
                        style={{ width: 300, height: 300 }}
                        sharedTransitionTag="tag"
                        animatedProps={{
                            fadeDuration: 1000,
                        }}  
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Products;

