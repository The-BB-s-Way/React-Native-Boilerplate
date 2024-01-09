import { Dimensions } from "react-native";

// Dichiaro le costanti che utilizzo nel progetto
export const Constants = {
    DIMENSIONS: {
        SCREEN_WIDTH: Dimensions.get('screen').width,
        SCREEN_HEIGHT: Dimensions.get('screen').height, 
    },
    BORDER_RADIUS: {
        BR_05: 5,
        BR_10: 10,
        BR_50: 50,
    },
    COLORS: {
        Primary: '#003349',
        Secondary: '#D67A5D',
        cdfBlue: '#003349',
        cdfOrange: '#D67A5D',
        White: 'white',
        Black: 'black',
        Gray: 'gray',
        LightGray: 'lightgray',
        DescriptionGray: '#555555'
    },
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    IosSafeArea: {
        flex: 1,
        backgroundColor: "white",
        // paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight: 0
    },
}