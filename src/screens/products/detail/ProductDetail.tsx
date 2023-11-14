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
import {useDispatch } from '../../../core/redux/store';


export const ProductDetail = ({ navigation, route }: { navigation: any, route: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch

    const productId = route.params.productId;   
    console.log("productId", productId)
    console.log("state", useSelector((state: RootState) => state))

    useEffect(() => {
        await dispatch(fetchData(productId, 'Products', 'https://casa-del-formaggio-api.bbsway.dev/app/products/' + productId, 'GET'))
    }, [productId])

    // Estrai il prodotto dalla Redux store
    const product = useSelector((state: RootState) => {
        const productData = state.storage.data.Products.find((product: any) => product.ID === productId);
        return productData ? productData.Data : null; // Controlla se productData esiste prima di accedere a Data
    });
    
    const Loader = () => (
        <Layout style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}>
            <Spinner size="giant" />
        </Layout>
    )

    return (
        <Suspense fallback={<Loader />}>
            <Layout style={productDetailStyles.container}>
                <Layout style={productDetailStyles.header}>
                    {product ? (
                        <>
                            <DefaultText style={productDetailStyles.headerTitle}>{product.Name}</DefaultText>
                            <DefaultText style={productDetailStyles.headerPrice}>€ {product.Price}</DefaultText>
                        </>
                    ) : (
                        // Mostra un messaggio o un placeholder quando il prodotto non è disponibile
                        <DefaultText>Loading product details...</DefaultText>
                    )}
                </Layout>
                <ScrollView style={{
                    paddingHorizontal: 20,
                    width: '100%',
                    maxHeight: 400
                }}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                >
                    {product && (
                        <Layout style={productDetailStyles.productImage}>
                            <ImageBackground source={{ uri: product.FileImage }} style={productDetailStyles.productImageBackground} />
                        </Layout>
                    )}
                </ScrollView>
            </Layout>
        </Suspense>
    )
}