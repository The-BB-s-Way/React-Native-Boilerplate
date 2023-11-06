import { useEffect } from "react";
import { Button, Text, View } from "react-native"
import { connect } from "react-redux";

const Home = ({navigation}: {navigation: any}) => {

    // Mi stampo il contenuto dello store
    useEffect(() => {
        console.log('Home mounted')
    }, [])

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>
                Home
            </Text>
            <Button
                title="Vai a categorie"
                onPress={() => navigation.navigate('Categories')}
            />
            {/* <Button
                title="Toggle drawer"
                onPress={() => {
                    // Funzione che serve per effettuare un toggle del drawer
                    navigation.toggleDrawer()
                }}
            /> */}
        </View>
    )
}

export default Home;