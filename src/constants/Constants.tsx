import { Dimensions } from "react-native";

// Dichiaro le costanti che utilizzo nel progetto
export const Constants = {
    DIMENSIONS: {
        SCREEN_WIDTH: Dimensions.get('screen').width,
        SCREEN_HEIGHT: Dimensions.get('screen').height, 
    },
    COLORS: {
        Primary: 'gold',
        White: 'white',
        Black: 'black',
        Gray: 'gray',
        LightGray: 'lightgray',
    }
}

