
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Categories from './src/screens/categories/Categories';
import Home from './src/screens/home/Home';
import Products from './src/screens/products/Products';
import Cart from './src/screens/cart/Cart';
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

// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const ProductsStack = createStackNavigator();

const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

const AuthStackScreen = () => {
  const opt = { // Opzioni per la navigazione (per esempio per il titolo)
    title: '',
  }

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={Welcome} options={opt}/>
      <AuthStack.Screen name="Signin" component={Signin} options={opt}/>
      <AuthStack.Screen name="Signup" component={Signup} options={opt}/>
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={opt}/>
    </AuthStack.Navigator>
  )
}


const CategoriesStackScreen = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={Categories} />
    </CategoriesStack.Navigator>
  )
}

const ProductsStackScreen = () => {
  return (
    <ProductsStack.Navigator screenOptions={{
      cardOverlayEnabled: true,
    }}>
      <ProductsStack.Screen name="Products" component={Products}/>
      <ProductsStack.Screen name="ProductDetail" component={ProductDetail} />
    </ProductsStack.Navigator>
  )
}

const CartStackScreen = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="Cart" component={Cart} />
    </ProductsStack.Navigator>
  )
}

const App = () => {

  const store = ReduxStore.getState();
  const dispatch = ReduxStore.dispatch;

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  // Funzioni di sincronizzazione con il localStorage
  const bootstrapAsyncStorage = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken") ?? "";
      if (userToken) {
        dispatch(setTokenAction({
          AccessToken: accessToken
        }));

        await AsyncStorage.removeItem("accessToken");
      }
  }

  const onCloseAsyncStorage = async () => {
    const accessToken = store.auth.AccessToken;
    if (accessToken) {
      await AsyncStorage.setItem("accessToken", accessToken);
    }
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
              <Tab.Screen name="Auth" component={AuthStackScreen} />
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Categories" component={CategoriesStackScreen} />
              <Tab.Screen name="Products" component={ProductsStackScreen} />
              <Tab.Screen name="Cart" component={CartStackScreen} />
              {/* </Tab.Group> */}
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
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

