import { Button, Input, Layout } from '@ui-kitten/components';
import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { welcomeStyles } from '../../../styles/welcomeStyles';
import DefaultText from '../../../constants/DefaultText';
import { LoginRequest } from '../../../core/sso/interfaces/login.interface';
import { RootState, useDispatch } from '../../../core/redux/store';
import { useSelector } from 'react-redux';
import { AuthService } from '../../../core/sso/auth.service';
import { authErrorResetAction } from '../../../core/redux/actions/authActions/authErrorResetAction';


interface SigninProps {
  navigation: any;
}

export const Signin = ({ navigation }: SigninProps) => {
  const dispatch = useDispatch(); // Ottieni la funzione dispatch

  const isLoggedIn = useSelector((state: RootState) => state.auth.IsLoggedIn);
  const isError = useSelector((state: RootState) => state.auth.Error);

  const isFirstRender = useRef(true);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)

  const handleLogin = async () => {
    // const token = await messaging().getToken();
    // console.log('handleLogin FCMToken: ', token)

    const loginData: LoginRequest = {
      Email: email,
      Password: password,
    }
    // integrare logica di login con redux
    AuthService.getInstance().signIn(loginData);
  }

  useEffect(() => {

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isLoggedIn) {
      Alert.alert(
        "Login effettuato con successo!",
        "Premi OK per continuare.",
        [
          { text: "OK", onPress: () => navigation.navigate('Utente') }
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
          { text: "OK", onPress: () => {
            dispatch(authErrorResetAction())
            navigation.navigate('Utente')
          } }
        ]
      )
    }

    console.log('isError', isError)
  }, [isError]);
  

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Layout style={welcomeStyles.container}>
        <Image source={require('../../../../assets/images/logo-bbs.png')} style={{
          height: 120,
          width: 120,
          objectFit: 'contain',
        }} />
        <Input style={welcomeStyles.input} placeholder="Email" onChange={(e) => { setEmail(e.nativeEvent.text) }} />
        <Input style={welcomeStyles.input} placeholder="Password" onChange={(e) => { setPassword(e.nativeEvent.text) }} secureTextEntry={secureTextEntry} />
        <Button style={welcomeStyles.authButtonWide} onPress={handleLogin}>
          <DefaultText style={welcomeStyles.authButtonText}>Accedi</DefaultText>
        </Button>
        <TouchableOpacity onPress={() => {
          navigation.navigate('ForgotPassword')
        }}>
          <DefaultText style={welcomeStyles.forgotPasswordText}>Password dimenticata?</DefaultText>
        </TouchableOpacity>
        <DefaultText style={welcomeStyles.existingAccountText}>Non hai un account?</DefaultText>
        <TouchableOpacity onPress={
          () => {
            navigation.navigate('Signup')
          }
        }>
          <DefaultText style={welcomeStyles.existingAccountLinkText}>Registrati</DefaultText>
        </TouchableOpacity>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default Signin;
