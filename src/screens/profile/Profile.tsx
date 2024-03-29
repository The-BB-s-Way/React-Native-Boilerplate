import { Alert, Button, View } from "react-native";
import { useSelector } from "react-redux";

import { RootState, useDispatch } from "../../core/redux/store";
import { useEffect, useRef } from "react";
import React from "react";
import { AuthService } from "../../core/sso/auth.service";
import { authErrorResetAction } from "../../core/redux/actions/authActions/authErrorResetAction";


const Profile = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const isAuthenticated = useSelector((state: RootState) => state.auth.IsLoggedIn)
    const isError = useSelector((state: RootState) => state.auth.Error);
    const isLoggedIn = useSelector((state: RootState) => state.auth.IsLoggedIn);

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (!isLoggedIn) {
            Alert.alert(
                "Logout effettuato con successo!",
                "Premi OK per continuare.",
                [
                    { text: "OK", onPress: () => navigation.navigate('Home') }
                ]
            )
        }
    }, [isLoggedIn])

    useEffect(() => {
        if (isError && isError !== '') {
            Alert.alert(
                "Errore durante la login!",
                isError,
                [
                    {
                        text: "OK", onPress: () => {
                            dispatch(authErrorResetAction())
                            navigation.navigate('Utente')
                        }
                    }
                ]
            )
        }

        console.log('isError', isError)
    }, [isError]);

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 20,
        }}>
            {
                isAuthenticated ? (
                    <Button title="Logout" onPress={() => {
                        AuthService.getInstance().signOut();
                    }} />
                ) : (
                    <Button title="Login" onPress={() => {
                        navigation.navigate('Signin')
                    }} />
                )
            }
        </View>
    )
}

export default Profile;

