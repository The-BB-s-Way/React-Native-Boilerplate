import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../stores/dataReducer";

const Products = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch

    const handleProductClick = () => {
        // Chiamo un api per ottenere dei dati fittizzi e li salvo nello store
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => {
            console.log('JSON: ', json)
            dispatch(setData(json));
            navigation.navigate('ProductDetail');
        })
    }

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        handleProductClick();
                    }}
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

