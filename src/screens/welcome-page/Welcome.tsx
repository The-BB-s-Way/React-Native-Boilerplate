import { Button, Icon, Layout } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, Text, Image, Modal, Alert, Platform } from 'react-native';

import DefaultText from '../../constants/DefaultText';
import { welcomeStyles } from '../../styles/welcomeStyles';


interface WelcomeProps {
  navigation: any;
}

export const Welcome = ({  navigation }: WelcomeProps) => {
  const SigninButton = () => { // Componente bottone modalità
    return (
      <Button
        style={welcomeStyles.authButton}
        onPress={() => {
          navigation.navigate('Signin');
        }}
      >
        <>
          <DefaultText style={welcomeStyles.authButtonText}>
            Accedi
          </DefaultText>
        </>
      </Button>
    );
  };

  const SignupButton = () => { // Componente bottone modalità
    return (
      <Button
        style={welcomeStyles.authButtonWhite}
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <>
          <DefaultText style={welcomeStyles.authButtonTextWhite}>
            Registrati
          </DefaultText>
        </>
      </Button>
    );
  };

  return (
    <Layout style={welcomeStyles.container}>
     <Image source={require('../../../assets/images/logo-bbs.png')} style={{
        height: 120,
        width: 120,
        objectFit: 'contain',
      }} />
      <DefaultText style={welcomeStyles.subtitle}>Specialità artigianali scelte con cura da tutto il mondo!</DefaultText>
      <View style={welcomeStyles.buttonsContainer}>
        <SigninButton />
        <SignupButton />
      </View>
    </Layout>
  );
};

export default Welcome;
