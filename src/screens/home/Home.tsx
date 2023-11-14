import { useEffect } from "react";
import { Alert, Button, Text, View } from "react-native"
import { connect, useDispatch, useSelector } from "react-redux";
import { Constants } from "../../constants/Constants";
import { RootState } from "../../core/redux/reducers/rootReducer";


const Home = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.IsLoggedIn
    );

    const user = useSelector(
        (state: RootState) => state.auth.User
    );

    // Mi stampo il contenuto dello store
    useEffect(() => {
        console.log('Home mounted');
        console.log("IsAuthenticated:", isAuthenticated);
    }, [])

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Button title="Login" onPress={() => {
                navigation.navigate('Auth')
            }} />

            <Text style={{
                fontSize: 20,
                marginTop: 20,
            }}>
                {isAuthenticated ? 'Sei autenticato!' : 'Non sei autenticato'}
            </Text>
            {
                isAuthenticated && (
                    <Text style={{
                        fontSize: 20,
                        marginTop: 20,
                        textAlign: 'center',
                    }}>
                        {user?.Name} {"\n"} 
                        {user?.Email}
                    </Text>   
                )
            }
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