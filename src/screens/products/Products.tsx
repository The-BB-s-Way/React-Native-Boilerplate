import { ScrollView, Text, TouchableNativeFeedback, View } from "react-native";
import { useSelector } from "react-redux";
import { Constants } from "../../constants/Constants";
import { TouchableHighlight } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState } from "../../core/redux/reducers/rootReducer";
import { fetchData } from "../../core/redux/middlewares/dataMiddleware";
import axios from "axios";
import { useDispatch } from "../../core/redux/store";
import { useEffect, useState } from "react";
import React from "react";

const Products = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const state = useSelector((state: RootState) => state);
    const axiosInstance = axios.create();

    const isLoading = state.storage.loading;
    const [currentProductId, setCurrentProductId] = useState<number|null>(null);
    const [productList, setProductList] = useState([])

    const handleSingleProductLoad = async (id: number) => {
        setCurrentProductId(id);
        dispatch(fetchData(id, 'Products', 'https://casa-del-formaggio-api.bbsway.dev/app/products/' + id, 'GET', axiosInstance))
    }

    useEffect(() => {
        if (!isLoading  && currentProductId) {
            navigation.navigate('ProductDetail', {
                productId: currentProductId, // Utilizza l'ID memorizzato
            });

            setCurrentProductId(null);
        }
    }, [isLoading, currentProductId]);

    useEffect(() => {
        const loadData = async () => {
            const response = await axios.post('https://casa-del-formaggio-api.bbsway.dev/app/products/no-login', {})
            setProductList(response.data)
        }

        loadData();
    }, [])


    return (
            <View style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                paddingVertical: 20,
            }}>
                <ScrollView>
                    {
                        productList.map((product: any) => (
                            <TouchableOpacity onPress={() => handleSingleProductLoad(product.ID)} key={product.ID}>
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
                                    }}>
                                        {product.Name}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        ))
                    }
                </ScrollView>
            </View>
    )
}

export default Products;

