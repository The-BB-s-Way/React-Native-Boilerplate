
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Categories from './src/screens/categories/Categories';
import Home from './src/screens/home/Home';
import Products from './src/screens/products/Products';
import SplashScreen from './src/components/SplashScreen';
import TabBar from './src/components/MainTabs';

import { Provider } from 'react-redux';
import { ReduxStore } from './src/core/redux/store';
import { ApplicationProvider } from '@ui-kitten/components';

import * as eva from '@eva-design/eva';
import { ProductDetail } from './src/screens/products/detail/ProductDetail';
import Signin from './src/screens/auth/signin/Signin';
import Signup from './src/screens/auth/signup/Signup';
import Welcome from './src/screens/welcome-page/Welcome';
import ForgotPassword from './src/screens/auth/forgot-password/ForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTokenAction } from './src/core/redux/actions/authActions/refreshTokenAction';
import { Icon, NativeBaseProvider } from 'native-base';
import Profile from './src/screens/profile/Profile';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { DeviceEventEmitter, Easing, PermissionsAndroid, Platform } from 'react-native';
import { NotificationsService } from './src/core/services/notifications/notifications.service';
import PushNotification from 'react-native-push-notification';
import Permissions, { check, PERMISSIONS, request } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Constants } from './src/constants/Constants';

// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const ProductsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 100, // Imposta la durata a 0 per rimuovere il delay
    easing: Easing.linear, // Puoi scegliere qualsiasi funzione di easing desideri
    useNativeDriver: true,
  },
} as any;

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = () => {
  const opt = { // Opzioni per la navigazione (per esempio per il titolo)
    title: '',
  }

  return (
    <ProfileStack.Navigator initialRouteName='Utente'>
      <ProfileStack.Screen name="Utente" component={Profile} />
      <ProfileStack.Screen name="Signin" component={Signin} options={opt}/>
      <ProfileStack.Screen name="Signup" component={Signup} options={opt}/>
      <ProfileStack.Screen name="ForgotPassword" component={ForgotPassword} options={opt}/>
    </ProfileStack.Navigator>
  )
}

const CategoriesStackScreen = () => {
  return (
    <CategoriesStack.Navigator initialRouteName='Categories'>
      <CategoriesStack.Screen name="Categories" component={Categories} />
    </CategoriesStack.Navigator>
  )
}

const ProductsStackScreen = () => {
  return (
    <ProductsStack.Navigator screenOptions={{
      cardOverlayEnabled: true,
      animationEnabled: true,
      transitionSpec: {
        open: config,
        close: config,
      },
    }} initialRouteName='Products'>
      <ProductsStack.Screen name="Products" component={Products}/>
      <ProductsStack.Screen name="ProductDetail" component={ProductDetail} />
    </ProductsStack.Navigator>
  )
}

const App = () => {
  const persistor = persistStore(ReduxStore, null, () => {
    console.log(ReduxStore.getState());
  });


  /* ---------------------------------- Logiche per le notifiche */
  const initAndroidNotifications = async () => { // inizializzo le notifiche per Android richiedendo i permessi e ottenendo il token
    try {
      const token = await messaging().getToken(); // ottengo il token a prescindere
      NotificationsService.getInstance().deviceToken = token; // lo salvo nel servizio
      console.log('token android:', token);
      await PermissionsAndroid.request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);  // richiedo i permessi
    } catch (error) {
      console.log(error);
    }
  }

  const initAppleNotifications = async () => { // inizializzo le notifiche per Apple 
    try {
      await PushNotificationIOS.requestPermissions();
      PushNotification.configure({
        onRegister: function (deviceToken: any) {
          console.log('deviceToken:', deviceToken);
        },
        onNotification: function (notification: any) {
          console.log('NOTIFICATION:', notification);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'ios') {
      DeviceEventEmitter.addListener('DeviceTokenReceived', (event: any) => { // questo evento serve per ottenere il token da Apple dopo che l'utente ha dato il consenso
        console.log('Device Token:', event.deviceToken);
        NotificationsService.getInstance().deviceToken = event.deviceToken; // lo salvo nel servizio
      });
    }
  }, [])


  useEffect(() => {
    if (Platform.OS === 'android') { 
      initAndroidNotifications();
    }
    else initAppleNotifications()
  }, []);
  /* ---------------------------------- Fine logiche per le notifiche */

  return (
    <NativeBaseProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={ReduxStore}>
          <PersistGate loading={<SplashScreen />} persistor={persistor}>
            <NavigationContainer>
              <Tab.Navigator
                tabBar={(props) => <TabBar {...props} />}
                initialRouteName={'Home'}
                screenOptions={{
                  headerShown: false,
                }}
              >
                {/* <Tab.Group screenOptions={{
                headerShown: false, // In questo modo dico che per tutte le 4 schermate non voglio mostrare l'header
              }}> Permette di raggruppare in maniera logica dei tab o stacks, dando le stesse proprietà ad esempio */}
      
                <Tab.Screen name=" Home " component={HomeStackScreen} />
                <Tab.Screen name=" Categories " component={CategoriesStackScreen} />
                <Tab.Screen name=" Products " component={ProductsStackScreen} />
                <Tab.Screen name=" Utente " component={ProfileStackScreen} />
                {/* </Tab.Group> */}
              </Tab.Navigator>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </NativeBaseProvider>
  );
}

// const Drawer = createDrawerNavigator(); // Utile per gestire finestre a comparsa, sia a dx che a sx

// // NB. Installare sempre i POD quando si ha a che fare con librerie tipo Reanimated

// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }

export default App;

