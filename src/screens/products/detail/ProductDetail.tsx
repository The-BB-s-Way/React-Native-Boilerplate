import React, { Suspense, useEffect, useState } from 'react';
import { Layout, Text, Button, Icon, Input, Spinner } from '@ui-kitten/components';
import { ImageBackground } from 'react-native';
import { ScrollView, Animated } from 'react-native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { productDetailStyles } from '../../../styles/productDetailStyles';
import { cartStyles } from '../../../styles/cartStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/redux/reducers/rootReducer';
import DefaultText from '../../../constants/DefaultText';
import { fetchData } from '../../../core/redux/middlewares/dataMiddleware';
import { useDispatch } from '../../../core/redux/store';
import { Skeleton, VStack, Center } from "native-base";
import { useIsFocused } from '@react-navigation/native';



export const ProductDetail = ({ navigation, route }: { navigation: any, route: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const isFocused = useIsFocused();

    const productId = route.params.productId;
    const [product, setProduct] = useState<any>(null);


    const requestData = useSelector((state: RootState) => state.storage.data);
    const isLoading = useSelector((state: RootState) => state.storage.loading);
    const isError = useSelector((state: RootState) => state.storage.error);
    const [showSkeleton, setShowSkeleton] = useState(true); // State per controllare la visualizzazione dello skeleton.



    useEffect(() => {
        dispatch(fetchData(productId, 'Products', 'https://casa-del-formaggio-api.bbsway.dev/app/products/' + productId, 'GET'))

    }, [dispatch])

    useEffect(() => {
        console.log('entro nella useEffect del prodotto')
        if (!isLoading && "Products" in requestData) {
            if (requestData.Products.findIndex((x) => x.ID === productId) !== -1) {
                const productIndex = requestData.Products.findIndex((x) => x.ID === productId)
                console.log('productIndex', productIndex)
                console.log('requestData.Products[productIndex]', requestData.Products[productIndex])
                setProduct(requestData.Products[productIndex])

         
                console.log('setShowSkeleton')
                setShowSkeleton(false);
           
            }
        }
    }, [requestData, isLoading, isFocused])

    useEffect(() => {
        if (isError) {
            console.log('entro nella useEffect dell\'errore')
        }
    }, [isError]);

    // Estrai il prodotto dalla Redux store
    // const product = useSelector((state: RootState) => {
    //     const productData = state.storage.data.Products.find((product: any) => product.ID === productId);
    //     return productData ? productData.Data : null; // Controlla se productData esiste prima di accedere a Data
    // });

    const SkeletonLoader = () => {
        return showSkeleton && <Center w="100%" paddingTop={5}>
            <VStack w="90%" maxW="400" space={8} overflow="hidden" rounded="md">
                <Skeleton h="40" startColor='coolGray.200' endColor='coolGray.300' />
                <Skeleton.Text px="4" startColor='coolGray.200' endColor='coolGray.300' />
            </VStack>
        </Center>;
    };

    if (isLoading) return <SkeletonLoader />;

    if (!product) {
        // Renderizza qualcosa se il prodotto non è ancora disponibile (può essere un messaggio di errore o un altro componente di caricamento)
        return <SkeletonLoader />;
    }

    return (
        showSkeleton ? <SkeletonLoader /> :
            <Layout style={productDetailStyles.container}>
                <Layout style={productDetailStyles.header}>
                    <DefaultText style={productDetailStyles.headerTitle}>{product.Data.Name}</DefaultText>
                    <DefaultText style={productDetailStyles.headerPrice}>€ {product.Data.Price}</DefaultText>
                </Layout>
                <ScrollView style={{
                    paddingHorizontal: 20,
                    width: '100%',
                    maxHeight: 400
                }}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                >
                    <Layout style={productDetailStyles.productImage}>
                        <ImageBackground source={{ uri: product.Data.FileImage }} style={productDetailStyles.productImageBackground} />
                    </Layout>
                </ScrollView>
            </Layout>

    )
}