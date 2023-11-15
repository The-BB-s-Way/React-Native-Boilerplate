import { useEffect, useState } from "react";
import { Alert, Button, Image, PermissionsAndroid, Text, View } from "react-native"
import { connect, useDispatch, useSelector } from "react-redux";
import { Constants } from "../../constants/Constants";
import { RootState } from "../../core/redux/reducers/rootReducer";
import { Platform } from "react-native";
import Geolocation from 'react-native-geolocation-service';

const Home = ({ navigation }: { navigation: any }) => {
    const [currentPosition, setCurrentPosition] = useState({ // Stato per la posizione corrente
        latitude: 0,
        longitude: 0
    });

    // Funzione per richiedere i permessi di geo-localizzazione
    const requestLocationPermission = () => {
        if (Platform.OS === 'android'){ // Logica per Android
            console.log('Richiesta permessi di geolocalizzazione');
            // Richiedi i permessi di geolocalizzazione
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Permesso di geolocalizzazione',
                    message: 'L\'app ha bisogno di accedere alla tua posizione',
                    buttonPositive: 'OK'
                }
            ).then((result) => {
                if (result === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Permesso di geolocalizzazione concesso');
                    // Ottieni la posizione
                    handleCurrentPosition();
                } else {
                    console.log('Permesso di geolocalizzazione negato');
                }
            }).catch((error) => {
                console.log('Errore nella richiesta dei permessi di geolocalizzazione');
            });
        } else if (Platform.OS === 'ios'){ // Logica per IOS
            console.log('Richiesta permessi di geolocalizzazione');
            // Richiedi i permessi di geolocalizzazione
            Geolocation.requestAuthorization('whenInUse').then((result) => {
                if (result === 'granted') {
                    console.log('Permesso di geolocalizzazione concesso');
                    // Ottieni la posizione
                    handleCurrentPosition();
                } else {
                    console.log('Permesso di geolocalizzazione negato');
                }
            }).catch((error) => {
                console.log('Errore nella richiesta dei permessi di geolocalizzazione');
            });
        }
    }

    const handleCurrentPosition = () => {
        Geolocation.getCurrentPosition( // Ottieni la posizione corrente
            async (position: any) => {
                // position.coords.latitude e position.coords.longitude contengono le coordinate GPS precise
                // Puoi usarle per fare quello che desideri, ad esempio impostare l'indirizzo
                const { latitude, longitude } = position.coords;

                console.log('Latitudine: ', latitude);
                console.log('Longitudine: ', longitude);

                setCurrentPosition({
                    latitude,
                    longitude
                });
            },
            (error: any) => {
                console.error('Errore nella geolocalizzazione: ', error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
        );
    }

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

            <Button title="Richiedi permessi di geolocalizzazione" onPress={requestLocationPermission} />

            {
                currentPosition.latitude !== 0 && currentPosition.longitude !== 0 &&
                <Text style={{
                    marginTop: 20
                }}>
                    Latitudine: {currentPosition.latitude} - Longitudine: {currentPosition.longitude}
                </Text>
            }
        </View>
    )
}

export default Home;