import { Button, Text, View } from "react-native"

const Categories = ({navigation}: {navigation: any}) => {
    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                Categories
            </Text>
            <Button
                title="Vai a prodotti"
                onPress={() => navigation.navigate('Products')}
            />
        </View>
    )
}

export default Categories;