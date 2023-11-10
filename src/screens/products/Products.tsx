import { Text, TouchableNativeFeedback, View } from "react-native";
import { useSelector } from "react-redux";
import { Constants } from "../../constants/Constants";
import { TouchableHighlight } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState } from "../../core/redux/reducers/rootReducer";
import { fetchData } from "../../core/redux/middlewares/dataMiddleware";
import axios from "axios";
import { useDispatch } from "../../core/redux/store";
import { useEffect } from "react";

const Products = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const state = useSelector((state: RootState) => state);

    console.log("state", state)
    // const product = useSelector(
    //     (state: RootState) => state.storage.data.Products.find((product) => product.id === 34)
    // );

    const handleSingleProductLoad = () => {
        console.log("handleProductDetail")
        // console.log("product", product)

        const axiosInstance = axios.create();

        // const product = state.storage.data['Products'].find((product) => product.id === 34)
        const productArray = state.storage.data && state.storage.data['Products'] ? state.storage.data['Products'] : [];
        
        console.log("productArray", productArray)
        if (productArray.length > 0) {
            const product = productArray.find((product) => product.id === 34)
            console.log("product", product)
        }
        else {
            dispatch(fetchData(34, 'Products', 'https://casa-del-formaggio.bbsway.dev/app/products/34', 'GET', axiosInstance))
        }
    }

    useEffect(() => {
        handleSingleProductLoad()
    }, [])


    return (
        <View style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 20,
        }}>
            <TouchableOpacity onPress={
                () => {
                    navigation.navigate('ProductDetail')
                }
            }   
            style={{
                width: '100%',
            }}>
                <View style={{
                    height: 100,
                    width: Constants.DIMENSIONS.SCREEN_WIDTH - 40,
                    backgroundColor: Constants.COLORS.Primary,
                    borderRadius: 10,
                    marginBottom: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: Constants.COLORS.White,
                        fontSize: 26,
                        fontWeight: 'bold',
                    }}>Prova</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Products;

