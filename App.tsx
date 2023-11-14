
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
import { NativeBaseProvider } from 'native-base';
import Profile from './src/screens/profile/Profile';

// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const ProductsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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
    }} initialRouteName='Products'>
      <ProductsStack.Screen name="Products" component={Products}/>
      <ProductsStack.Screen name="ProductDetail" component={ProductDetail} />
    </ProductsStack.Navigator>
  )
}

const App = () => {
  const dispatch = ReduxStore.dispatch;

  const [isLoading, setIsLoading] = React.useState(true);

  // Funzioni di sincronizzazione con il localStorage
  const bootstrapAsyncStorage = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken") ?? "";
      if (accessToken) {
        dispatch(setTokenAction({
          AccessToken: accessToken
        }));

        await AsyncStorage.removeItem("accessToken");
      }

      console.log("FASE DI APERTURA DELL'APP, STATO DELLO STORE: ", ReduxStore.getState());
      console.log("FASE DI APERTURA DELL'APP, STATO DEL LOCAL STORAGE", await AsyncStorage.getAllKeys());
  }

  const onCloseAsyncStorage = async () => {
    const accessToken = ReduxStore.getState().auth.AccessToken;
    if (accessToken) {
      await AsyncStorage.setItem("accessToken", accessToken);
    }

    console.log("FASE DI CHIUSURA DELL'APP, STATO DELLO STORE: ", ReduxStore.getState());
    console.log("FASE DI CHIUSURA DELL'APP, STATO DEL LOCAL STORAGE", await AsyncStorage.getAllKeys());
  }

  useEffect(() => {
    bootstrapAsyncStorage().then(() => {
      setIsLoading(false);
    });

    return () => {
      onCloseAsyncStorage();
    }

  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NativeBaseProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={ReduxStore}>
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
    
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Categories" component={CategoriesStackScreen} />
              <Tab.Screen name="Products" component={ProductsStackScreen} />
              <Tab.Screen name="Utente" component={ProfileStackScreen} />
              {/* </Tab.Group> */}
            </Tab.Navigator>
          </NavigationContainer>
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

