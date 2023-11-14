import { Alert, Button, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Constants } from "../../constants/Constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState } from "../../core/redux/reducers/rootReducer";
import { fetchData } from "../../core/redux/middlewares/dataMiddleware";
import axios from "axios";
import { useDispatch } from "../../core/redux/store";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { AuthService } from "../../core/sso/auth.service";
import { authErrorResetAction } from "../../core/redux/actions/authActions/authErrorResetAction";


const Profile = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch(); // Ottieni la funzione dispatch
    const state = useSelector((state: RootState) => state);
    const isAuthenticated = state.auth.IsLoggedIn;
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

