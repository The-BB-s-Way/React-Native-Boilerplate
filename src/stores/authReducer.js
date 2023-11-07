// authReducer.js

// Definizione dello stato iniziale
const initialState = {
    isAuthenticated: false, // Puoi inizializzare isAuthenticated con il valore iniziale desiderato
    user: null, // Puoi gestire altre informazioni sull'utente qui
};

// Reducer per lo stato dell'utente
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'signin':
            console.log("action payload", action.payload);
            return {
                ...state,
                isAuthenticated: true, // Imposta isAuthenticated su true
                user: action.payload, // Puoi utilizzare action.payload per aggiungere informazioni sull'utente 
            };
        case 'signout':
            return {
                ...state,
                isAuthenticated: false, // Imposta isAuthenticated su false
                user: null, // Rimuovi le informazioni sull'utente
            };
        // Aggiungi altri casi per gestire diverse azioni, se necessario
        default:
            return state;
    }
};

export const login = (data) => ({ // Funzione di azione per l'accesso
    type: 'signin',
    // Aggiungo un payload per aggiungere informazioni sull'utente, che verranno presi dal server
    payload: data
});

export const logout = () => ({ // Funzione di azione per il logout
    type: 'signout',
});

export default authReducer;