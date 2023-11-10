import React, { useState } from 'react';
import { Layout, Text, Button, Icon, Input, Spinner } from '@ui-kitten/components';
import { ImageBackground } from 'react-native';
import { ScrollView, Animated } from 'react-native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { productDetailStyles } from '../../../styles/productDetailStyles';
import { cartStyles } from '../../../styles/cartStyles';
import DefaultText from '../../../constants/DefaultText';



export const ProductDetail = ({ navigation, route }: { navigation: any, route: any }) => {
    
    return (
        <Layout style={productDetailStyles.container}>
            <Layout style={productDetailStyles.header}>
                <DefaultText style={productDetailStyles.headerTitle}>Nome prodotto</DefaultText>
                <DefaultText style={productDetailStyles.headerPrice}>€ Prezzo</DefaultText>
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
                    <ImageBackground source={{ uri: '../../../../assets/images/logo.png' }} style={productDetailStyles.productImageBackground} />
                </Layout>

                <Layout style={productDetailStyles.productInfo}>
                    <DefaultText style={productDetailStyles.productDescriptionText}>
                        Descrizione
                    </DefaultText>
                    <DefaultText style={productDetailStyles.productDescriptionSubtitles}>Ingredienti</DefaultText>
                    <DefaultText style={productDetailStyles.productDescriptionText}>
                        Ingredienti
                    </DefaultText>
                    <DefaultText style={productDetailStyles.productDescriptionSubtitles}>Allergeni</DefaultText>
                    <DefaultText style={productDetailStyles.productDescriptionText}>
                        Allergeni
                    </DefaultText>
                </Layout>
            </ScrollView>

        </Layout>
    )
}