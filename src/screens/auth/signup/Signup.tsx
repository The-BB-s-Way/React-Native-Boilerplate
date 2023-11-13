import { Button, Icon, Input, Layout } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, Text, Image, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { welcomeStyles } from '../../../styles/welcomeStyles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from '../../../constants/DefaultText';
import { AuthService } from '../../../core/sso/auth.service';

interface SignupProps {
  navigation: any;
}

export const Signup = ({ navigation }: SignupProps) => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSignup = () => {
    const signupData = {
      Name: name,
      Surname: surname,
      Email: email,
      Password: password
    }

    if (password != confirmPassword) {
      Alert.alert(
        "Errore durante la registrazione!",
        "Le password non coincidono",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "cancel",
          }
        ]
      )
      return;
    }

    // Integrare logica di signup con redux
  }

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
        <Input style={welcomeStyles.input} placeholder="Nome" onChange={
          (e) => {
            setName(e.nativeEvent.text)
          }
        } />
        <Input style={welcomeStyles.input} placeholder="Cognome" onChange={
          (e) => {
            setSurname(e.nativeEvent.text)
          }
        } />
        <Input style={welcomeStyles.input} placeholder="Email" onChange={
          (e) => {
            setEmail(e.nativeEvent.text)
          }
        } />
        <Input
          style={welcomeStyles.input}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          onChange={(e) => {
            setPassword(e.nativeEvent.text);
          }}
        />
        <Input
          style={welcomeStyles.input}
          placeholder="Conferma password"
          secureTextEntry={secureTextEntry}
          onChange={(e) => {
            setConfirmPassword(e.nativeEvent.text);
          }}
        />
        <Button style={welcomeStyles.authButtonWide} onPress={handleSignup}>
          <DefaultText style={welcomeStyles.authButtonText}>Registrati</DefaultText>
        </Button>
        <DefaultText style={welcomeStyles.existingAccountText}>Hai già un account?</DefaultText>
        <TouchableOpacity onPress={
          () => {
            navigation.navigate('Signin')
          }
        }>
          <DefaultText style={welcomeStyles.existingAccountLinkText}>Accedi</DefaultText>
        </TouchableOpacity>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default Signup;
