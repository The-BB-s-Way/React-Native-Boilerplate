import { Text, TouchableNativeFeedback, View } from "react-native";
import { useSelector } from "react-redux";
import { Constants } from "../../constants/Constants";
import { TouchableHighlight } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState } from "../../core/redux/reducers/rootReducer";
import { fetchData } from "../../core/redux/middlewares/dataMiddleware";
import axios from "axios";
import { useDispatch } from "../../core/redux/store";

const Products = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch

    const handleProductDetail = (id: number) => {
        const product = useSelector(
            (state: RootState) => state.storage.data.Products.find((product) => product.id === id)
        );

        const axiosInstance = axios.create();

        if(!product) {
            dispatch(fetchData(id, 'Products', 'https://casa-del-formaggio.bbsway.dev/app/products/' + id, 'GET', axiosInstance))
        }
    }


    return (
        <View style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 20,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} style={{
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

