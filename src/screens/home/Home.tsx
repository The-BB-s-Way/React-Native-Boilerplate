import { useEffect } from "react";
import { Alert, Button, Image, Text, View } from "react-native"
import { connect, useDispatch, useSelector } from "react-redux";
import { Constants } from "../../constants/Constants";
import { RootState } from "../../core/redux/reducers/rootReducer";


const Home = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.IsLoggedIn
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
            paddingVertical: 40,
            alignItems: 'center'
        }}>
            <Image source={require('../../../assets/images/logo-bbs.png')} style={{
                width: 80,
                height: 80,
                marginBottom: 30,
                objectFit: 'contain'
            }} />
        </View>
    )
}

export default Home;