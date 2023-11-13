import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Text } from 'react-native';
import { Constants } from '../constants/Constants';

// Prendo la larghezza dello schermo
const TAB_BAR_WIDTH = Constants.DIMENSIONS.SCREEN_WIDTH / 4; // Divido per 4 perchè ho 4 tab
const ANIMATED_PART_HEIGHT = 4; // Altezza della parte animata
const TAB_BAR_PADDING_VERTICAL = 10; // Altezza del padding sopra e sotto la TabBar

 
type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};


const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const animationHorizontalValue = useRef(new Animated.Value(0)).current;

  const animate = (index: number) => { // Gestisco l'animazione della parte animata basandomi sull'indice della tab selezionata
    Animated.spring(animationHorizontalValue, {
      toValue: index * TAB_BAR_WIDTH, // Moltiplico l'indice per la larghezza della tab per ottenere la posizione finale
      useNativeDriver: true, // Questa proprietà serve per far funzionare l'animazione su Android
    }).start(); // Avvio l'animazione 
  };

  useEffect(() => {
    animate(state.index); // Chiamo la funzione animate passando l'indice della tab selezionata
  }, [state.index]);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.animatedWrapper}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{ translateX: animationHorizontalValue }],
            },
          ]}
        />
      </Animated.View>

      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) { // Se la tab non è selezionata e non è stato previsto un default
              navigation.navigate(route.name); // Navigo verso la tab selezionata (route.name)
            }
          };

          return (
            <TouchableWithoutFeedback
              onPress={onPress}
              style={styles.tabButton}
              key={`${index}--${route.key}`} // NB. Questo è un modo per evitare un warning invasivo di React Native
            >
              <View style={styles.innerView}>
                <Text numberOfLines={1} style={[styles.iconText, { color: isFocused ? Constants.COLORS.Primary : Constants.COLORS.Black }]}>
                  {label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderTopColor: Constants.COLORS.Gray,
    borderTopWidth: 0.5,
    backgroundColor: Constants.COLORS.White,
    paddingBottom: TAB_BAR_PADDING_VERTICAL, // Aggiungi il padding inferiore
  },
  tabButton: {
    flex: 1,
  },
  innerView: {
    paddingVertical: Constants.DIMENSIONS.SCREEN_HEIGHT * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    width: TAB_BAR_WIDTH,
    textAlign: 'center',
    fontSize: 16,
  },
  animatedView: {
    width: TAB_BAR_WIDTH,
    height: ANIMATED_PART_HEIGHT,
    backgroundColor: Constants.COLORS.Primary,
  },
  animatedWrapper: { width: TAB_BAR_WIDTH, alignItems: 'center', justifyContent: 'center', },
});

export default TabBar;
