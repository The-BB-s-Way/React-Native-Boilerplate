import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef, useMemo, useCallback, useEffect } from "react";
import { Button, Text, TextInput, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../App";
import { useIsFocused } from "@react-navigation/native"; // Permette di eseguire una funzione quando lo screen è in focus
import React from "react";
import { Constants } from "../../constants/Constants";
import axios from "axios";
import DeviceInfo from "react-native-device-info";
import { login } from "../../stores/authReducer";

const DEVICE_TOKEN = 'cM4XZxMNSAKmoWgNUbY4lf:APA91bGYCul3UfwaP3BOX0Y0W2VFTaPjbOPlAbFPXgaaBzVL_dCWZhCIXDxER62FtMZRugqEWSwPZsKduIvAPqp-mlEI-h9BiRMxuwib2YkOBG-faw4PrEdmI-WfNB1PEj6GrLEqyPlo';

const Cart = ({ navigation }: { navigation: any }) => {
    const isFocused = useIsFocused(); // Hook per capire se la schermata è in primo piano 

    /* Variabili per la gestione del bottom sheet */
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '80%'], []);
    /* Fine variabili per la gestione del bottom sheet */

    /* Funzioni per la gestione del bottom sheet */
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
        // bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
    }, []);

    // useEffect(() => {
    //     if (isFocused) {
    //         handleCloseModalPress();
    //     }
    // }, [isFocused]);
    /* Fine funzioni per la gestione del bottom sheet */


    /* Bottom Sheet Custom con controllo su autenticazione */
    const cartBottomSheet = () => {
        const dispatch = useDispatch(); // Ottieni la funzione dispatch

        const [email, onEmailChange] = React.useState('');
        const [psw, onPswChange] = React.useState('');

        const isAuthenticated = useSelector(
            (state: RootState) => state.user.isAuthenticated
        );

        const handleLogin = async () => {
            const credentials = {
                Email: email,
                Password: psw
            };

            const userAgent = await DeviceInfo.getUserAgent(); // Ottiengo il userAgent del dispositivo

            const headers = {
              "X-Device-Token": DEVICE_TOKEN,
              'user-agent': userAgent
            };
      
            const response = await axios.post('https://casa-del-formaggio-api.bbsway.dev/auth/login', credentials, {
              headers: headers
            });

            console.log('Response: ', response.data)

            const data = {
                name: response.data.User.Name,
                email: response.data.User.Email,
            }

            dispatch(await login(data)) // Chiama la funzione login definita nel tuo authReducer
        
        }

        if (!isAuthenticated) {
            return (
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <View style={{
                        flex: 1,
                        display: 'flex',
                        paddingVertical: 30,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 20,
                        
                        }}>
                            Non risulti essere autenticato!
                        </Text>
                        
                        {/* Creo il form per l'autenticazione composto da email e password */}
                        <View style={{
                            width: '100%',
                            paddingHorizontal: 20,
                        }}>
                            <Text style={{
                                marginBottom: 10,
                            }}>
                                Email
                            </Text>
                            <TextInput
                                style={{
                                    width: '100%',
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    marginBottom: 10,
                                }}
                                onChangeText={email => onEmailChange(email)}
                                value={email}
                            />
                            <Text style={{
                                marginBottom: 10,
                            }}>
                                Password
                            </Text>
                            <TextInput
                                secureTextEntry={true}
                                style={{
                                    width: '100%',
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    marginBottom: 10,
                                }}
                                onChangeText={psw => onPswChange(psw)}
                                value={psw}
                            />

                            <Button
                                title="Login"
                                color={Constants.COLORS.Primary}
                                onPress={() => {
                                    console.log('Login');
                                    handleLogin();
                                }}
                            />
                        </View>

                    </View>
                </BottomSheetModal>
            )
        }

        return (
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>
                        Ciao Utente, ecco il tuo carrello!
                    </Text>
                </View>
            </BottomSheetModal>
        )
    }
    /* Fine Bottom Sheet Custom */


    return (
        <BottomSheetModalProvider>
            <View style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>
                    Carrello
                </Text>
                <Button
                    title="Paga ora!"
                    color={Constants.COLORS.Primary}
                    onPress={handlePresentModalPress}
                />
            </View>

            {
                cartBottomSheet()
            }

        </BottomSheetModalProvider>
    )
}

export default Cart;