import { StyleSheet } from 'react-native';
import { Constants } from '../constants/Constants';

export const customHeaderStyles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        // backgroundColor: '#FAFAFA',
        flexDirection: 'row',
    },
    headerProducts: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        // backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        paddingHorizontal: 30
    },
    headerProducts: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        // backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        paddingHorizontal: 30
    },
    header2: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        // backgroundColor: '#FAFAFA',
        flexDirection: 'row',
    },
    address: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressText: {
        color: Constants.COLORS.cdfBlue,
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});