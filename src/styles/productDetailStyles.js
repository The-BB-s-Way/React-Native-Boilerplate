import { StyleSheet } from 'react-native';
import { CDFTheme } from '../constants/Constants';;

export const productDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#FAFAFA',
        paddingVertical: 20,  
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: CDFTheme.colors.cdfOrange,
    },
    headerPrice: {
        fontSize: 20,
        fontWeight: 'normal',
        color: CDFTheme.colors.cdfOrange,
        marginBottom: 20
    },
    productImage: {
        width: '100%',
        resizeMode: 'contain',

        backgroundColor: '#FAFAFA',
    },
    productInfo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20,
        flex: 1,
        height: '100%',
        backgroundColor: '#FAFAFA',
    },
    productDescriptionText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: CDFTheme.colors.cdfBlue,
    },
    productDescriptionSubtitles: {
        fontSize: 18,
        fontWeight: 'bold',
        color: CDFTheme.colors.cdfOrange,
        marginTop: 20,
    },
    productImageBackground: {
        width: '100%',
        height: 200,
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stickyFooter: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
    },
    stickyFooterContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stickyFooterContentLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    stickyFooterContentLeftPriceText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: CDFTheme,
    },
    stickyFooterContentLeftSubText: {
        fontSize: 12,
        fontWeight: 'normal',
        color: 'black',
        paddingLeft: 5,
    },
    stickyFooterContentRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});