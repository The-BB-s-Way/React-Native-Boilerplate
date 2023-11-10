import { StyleSheet } from 'react-native';

export const searchStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        fontSize: 18,
    },
    searchList: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    header: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        marginBottom: 20,
    },
    noResults: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',  
    }
});

