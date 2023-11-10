import { StyleSheet } from 'react-native';
import { CDFTheme } from '../constants/Constants';;

export const ordersStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 30,
        paddingLeft: 30,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        backgroundColor: '#FAFAFA',
    },
    container2: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 30,
        backgroundColor: '#FAFAFA',
        height: '100%',
        width: '100%',
        // aggiungo una shadow top per far vedere che c'è un header
    },
    orderCard: {
        width: '100%',
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

    },
    imageBlock: {
        width: 130,
        // opacity: .75,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    contentBlock: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
    },
    orderStatus: {
        fontSize: 18,
        fontWeight: 'normal',
        paddingBottom: 15,
    },
    orderInfo: {
        fontSize: 14,
        color: 'gray',
    },

    orderInfoDetailHeading: {
        fontSize: 20,
        color: CDFTheme.colors.cdfBlue,
        paddingBottom: 30,
        paddingHorizontal: 30,
    },
    
    orderInfoDetail: {
        fontSize: 20,
        color: CDFTheme.colors,
    },

    orderInfoDetailStatus: {
        fontSize: 22,
        color: CDFTheme.colors,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 20,
    },
    orderInfoDetailBold: {
        fontSize: 18,
        color: CDFTheme.colors,
        fontWeight: 'bold',
    },
    orderBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 20,
    },
    orderQuantity: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'gray',
    },
});