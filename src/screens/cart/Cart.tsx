import { Button, Text, View } from "react-native"

const Cart = ({navigation}: {navigation: any}) => {
    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                Cart
            </Text>
        </View>
    )
}

export default Cart;