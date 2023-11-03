import { Button, Text, View } from "react-native"

const Products = ({navigation}: {navigation: any}) => {
    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                Products
            </Text>
            <Button
                title="Vai a detail"
                onPress={() => navigation.navigate('ProductDetail')}
            />
        </View>
    )
}

export default Products;