import { Button, Icon, Input, Layout } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { welcomeStyles } from '../../../styles/welcomeStyles';
import DefaultText from '../../../constants/DefaultText';
import { AuthService } from '../../../core/sso/auth.service';

interface ForgotPasswordProps {
  navigation: any;
}

export const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const [email, setEmail] = useState<string>('');

  const handleForgotPassword = () => {
    AuthService.getInstance().forgotPassword(email).then((response: any) => {
      Alert.alert(
        "A breve riceverai una mail per recuperare la password",
        "Premi sul link contenuto nella mail per ripristinare la password",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "cancel",
          }
        ]
      );
    }).catch((error) => {
      console.log('error: ', error)
      Alert.alert(
        "Errore durante il recupero della password",
        "Controlla l'email inserita e riprova",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "cancel",
          }
        ]
      );
    });
  }

  return (
    <Layout style={welcomeStyles.container}>
      <Image source={require('../../../../assets/images/logo-bbs.png')} style={{
        height: 180,
        width: 180,
        objectFit: 'contain',
      }} />
      <DefaultText style={welcomeStyles.title}>Ripristina password</DefaultText>
      <DefaultText style={welcomeStyles.subtitle}>Inserisci la tua email per iniziare la procedura</DefaultText>
      <Input style={welcomeStyles.input} placeholder="Email" onChange={
        (e: any) => {
          setEmail(e.nativeEvent.text)
        }
      } />
      <Button style={welcomeStyles.authButtonWide} onPress={handleForgotPassword}>
        <DefaultText style={welcomeStyles.authButtonText}>Conferma</DefaultText>
      </Button>
    </Layout>
  );
};

export default ForgotPassword;
