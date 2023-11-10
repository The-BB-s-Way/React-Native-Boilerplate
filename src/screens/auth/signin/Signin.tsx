import { Button, Input, Layout } from '@ui-kitten/components';
import React, { useState } from 'react';
import {Image, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { welcomeStyles } from '../../../styles/welcomeStyles';
import DefaultText from '../../../constants/DefaultText';
import { AuthService } from '../../../core/sso/auth.service';
import { LoginRequest } from '../../../core/sso/interfaces/login.interface';


interface SigninProps {
  onLoginSuccess: () => void;
  navigation: any;
}

export const Signin = ({ onLoginSuccess, navigation }: SigninProps) => {
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

    try {
      AuthService.getInstance().signIn(loginData)
        .then((signinError: any) => {
          if (!signinError) {
            setTimeout(() => {
              onLoginSuccess()
            }, 1000);
          }
          else {
            signinErrorHandle(signinError.response)
          }
          // Notifico ad App.tsx che l'utente è stato autenticato correttamente e che può mostrare la Home
        }),
        (error: any) => {
          signinErrorHandle(error)
        }
    } catch (error) {
      signinErrorHandle(error)
    }
  }


  const signinErrorHandle = (response: any) => {
    console.log('signinErrorHandle: ', response)
    Alert.alert(
      "Errore durante il login!",
      response.data.error,
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        }
      ]
    );
  }

  return (

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <Layout style={welcomeStyles.container}>
          <Image source={require('../../../../assets/images/casa-del-formaggio-logo.png')} style={{
              height: 180,
              width: 180,
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
