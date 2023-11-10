
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Categories from './src/screens/categories/Categories';
import Home from './src/screens/home/Home';
import Products from './src/screens/products/Products';
import ProductDetail from './src/screens/products/detail/ProductDetail';
import Cart from './src/screens/cart/Cart';
import SplashScreen from './src/components/SplashScreen';
import TabBar from './src/components/MainTabs';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import ProductDetail2 from './src/screens/products/detail/ProductDetail2';
import { ReduxStore } from './src/core/redux/store';

// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const ProductsStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
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
      <ProductsStack.Screen name="ProductDetail2" component={ProductDetail2} />
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
  // const insets = useSafeAreaInsets(); // Serve a gestire gli spacing di sistema in modo più preciso
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
    // <SafeAreaProvider>
    <Provider store={ReduxStore.getInstance().getStore()}>
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
          {/* </Tab.Group> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
    // </SafeAreaProvider>
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

