import { StyleSheet } from 'react-native';

export const categoriesStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        paddingHorizontal: 30,   
        paddingVertical: 20,     
    },
    categoryCard: {
        backgroundColor: '#fafafa',
        width: '100%',
        height: 130,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryCardText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.2,
        display: 'flex',
    }
});