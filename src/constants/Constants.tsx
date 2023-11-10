import { Dimensions } from "react-native";

// Dichiaro le costanti che utilizzo nel progetto
export const Constants = {
    DIMENSIONS: {
        SCREEN_WIDTH: Dimensions.get('screen').width,
        SCREEN_HEIGHT: Dimensions.get('screen').height, 
    },
    COLORS: {
        Primary: '#003349',
        Secondary: '#D67A5D',
        White: 'white',
        Black: 'black',
        Gray: 'gray',
        LightGray: 'lightgray',
    }
}


// Da togliere successivamente utilizzando solo Constants
export const CDFTheme = {
    colors: {
        cdfBlue: '#003349',
        cdfOrange: '#D67A5D',
    },
    fontFamily: {
        regular: 'Archivo-Regular',
        bold: 'Archivo-Bold',
        thin: 'Archivo-Thin',
        black: 'Archivo-Black',
    },
};




