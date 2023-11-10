import { AddDataAction } from "../actions/dataActions/addDataAction";
import { RemoveDataAction } from "../actions/dataActions/removeDataAction";
import { SetDataAction } from "../actions/dataActions/setDataAction";
import { Action } from "../types/baseAction";

interface DataState {
    [key: string]: any[];
}

const initialState: DataState = {};

export const dataReducer = (state: DataState = initialState, action: Action): DataState => {
    switch (action.type) {
        case "SET_DATA": {
            const setDataAction = action as SetDataAction;
            // Imposta i dati per una data chiave. Imposto il dato in un array
            return {
                ...state,
                [setDataAction.payload.Key]: [setDataAction.payload.Data],
            };
        }

        case "ADD_DATA": {
            const addDataAction = action as AddDataAction;
            // Aggiunge nuovi dati all'array esistente per una data chiave
            return {
                ...state,
                [addDataAction.payload.Key]: [...(state[addDataAction.payload.Key] || []), addDataAction.payload.Data],
            };
        }
        case "REMOVE_DATA": {
            const removeDataAction = action as RemoveDataAction;
            // Rimuove i dati dall'array esistente per una data chiave
            return {
                ...state,
                [removeDataAction.payload.Key]: state[removeDataAction.payload.Key].filter(
                    (data) => data !== removeDataAction.payload.Data
                ),
            };
        }
        default:
            return state;
    }
};
  