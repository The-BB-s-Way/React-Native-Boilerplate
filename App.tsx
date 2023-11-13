
import React from 'react';
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
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
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
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="Products" component={Products} />
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
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  // Creo un nuovo store per gestire lo stato dell'utente (per sapere se è loggato o meno)
  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
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
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Categories" component={CategoriesStackScreen} />
              <Tab.Screen name="Products" component={ProductsStackScreen} />
              <Tab.Screen name="Cart" component={CartStackScreen} />
            
              <Tab.Screen name="Auth" component={AuthStackScreen} />
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

