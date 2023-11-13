import React, { useState } from 'react';
import { Layout, Text, Button, Icon, Input, Spinner } from '@ui-kitten/components';
import { ImageBackground } from 'react-native';
import { ScrollView, Animated } from 'react-native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { productDetailStyles } from '../../../styles/productDetailStyles';
import { cartStyles } from '../../../styles/cartStyles';
import DefaultText from '../../../constants/DefaultText';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/redux/reducers/rootReducer';



export const ProductDetail = ({ navigation, route }: { navigation: any, route: any }) => {
    const productId = route.params.productId;   
    console.log("productId", productId)

    const data = useSelector((state: RootState) => state.storage.data.Products.find((product: any) => product.Data.ID === productId)).Data;
    console.log("data", data)
    return (
        <Layout style={productDetailStyles.container}>
            <Layout style={productDetailStyles.header}>
                <DefaultText style={productDetailStyles.headerTitle}>{data.Name}</DefaultText>
                <DefaultText style={productDetailStyles.headerPrice}>€ {data.Price}</DefaultText>
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
                    <ImageBackground source={{ uri: data.FileImage }} style={productDetailStyles.productImageBackground} />
                </Layout>

            </ScrollView>

        </Layout>
    )
}