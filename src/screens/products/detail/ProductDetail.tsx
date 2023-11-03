import { Text, View } from "react-native"

const ProductDetail = ({navigation}: {navigation: any}) => {
    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                ProductDetail
            </Text>
        </View>
    )
}

export default ProductDetail;