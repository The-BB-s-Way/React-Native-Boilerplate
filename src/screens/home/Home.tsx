import { useEffect } from "react";
import { Alert, Button, Text, View } from "react-native"
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../App"; // Importa RootState dal file App.tsx o dal percorso in cui è definito il tuo rootReducer
import { login, logout } from "../../stores/authReducer";


const Home = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const isAuthenticated = useSelector(
        (state: RootState) => state.user.isAuthenticated
    );

    const user = useSelector(
        (state: RootState) => state.user.user
    );

    // Mi stampo il contenuto dello store
    useEffect(() => {
        console.log('Home mounted');
        console.log("IsAuthenticated:", isAuthenticated);
    }, [])

    const handleLogin = () => {
        dispatch(login())
    };

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Button
                    title="Effettua login"
                    onPress={handleLogin}
                    disabled={isAuthenticated}
                />
                <Button
                    title="Effettua logout"
                    onPress={handleLogout}
                    disabled={!isAuthenticated}
                />
            </View>

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
                        {user?.name} {"\n"} 
                        {user?.email}
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