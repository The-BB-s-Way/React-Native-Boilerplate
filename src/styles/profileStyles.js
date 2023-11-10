import { StyleSheet } from 'react-native';
import { CDFTheme } from '../constants/Constants';;
// Importo il tema
// import { theme } from './theme';

export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 30,

        backgroundColor: '#FAFAFA',
        height: '100%',
        width: '100%',
    },
    title: {
        color: CDFTheme.colors.cdfBlue,
        fontWeight: 'bold',
        fontSize: 28,
    },
    titleDetail: {
        color: CDFTheme.colors.cdfBlue,
        fontWeight: 'bold',
        fontSize: 28,
        paddingHorizontal: 30
    },
    subtext: {
        marginTop: 5,
        fontWeight: 'normal',
        color: CDFTheme.colors.cdfBlue,
        fontSize: 20,
    },
    settingsBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#C4C4C4',
    },
    settingsTitle: {
        color: CDFTheme.colors.cdfBlue,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        paddingTop: 20
    },
    settingsText: {
        color: CDFTheme.colors.cdfBlue,
        fontWeight: 'normal',
        fontSize: 18,
    },
    settingsTextNotifications: {
        color: CDFTheme.colors.cdfOrange,
        fontWeight: 'bold',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    settingsIcon: {
        color: CDFTheme.colors.cdfBlue,
        fontWeight: 'normal',
        fontSize: 20,
        // borderWidth: 1,
        // borderColor: CDFTheme.colors.cdfBlue,
    },
});

export const editProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: '#FAFAFA',
        height: '100%',
        width: '100%',
    },
    inputLabel: {
        color: CDFTheme.colors.cdfBlue,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',

        borderRadius: 20,
        marginBottom: 20,
        borderWidth: 0,
        shadowColor: 'black',
        shadowOpacity: 0.05,
        shadowOffset: { width: 10, height: 10 },
        elevation: 2,
    },
    inputDisabled: {
        width: '100%',
        height: 40,
        backgroundColor: '#FAFAFA', // '#E5E5E5

        borderRadius: 20,
        marginBottom: 20,

        shadowColor: 'black',
        shadowOpacity: 0.05,
        shadowOffset: { width: 10, height: 10 },
        elevation: 2,
    },
    changePassword: {
        color: CDFTheme.colors.cdfBlue,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        textDecorationLine: 'underline',
    },
    editButton: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        left: 0,
        marginHorizontal: 20,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CDFTheme.colors.cdfBlue,
        borderRadius: 50,
        borderWidth: 0,
        
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.05,
        elevation: 3,
    },
    editButtonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});