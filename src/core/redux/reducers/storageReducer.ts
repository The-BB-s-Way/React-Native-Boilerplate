import { AnyAction } from "redux";

export interface StorageState {
    data: { [key: string]: any[] };
    loading: boolean;
    error: string | null;
}

const initialState: StorageState = {
    data: {},
    loading: false,
    error: null,
};

export const storageReducer = (state: StorageState = initialState, action: AnyAction) => {
    switch (action.type) {
        case "SET_DATA": {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.Key]: [action.payload.Data],
            },
        };
    }
  
    case "ADD_DATA": {
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.Key]: [...(state.data[action.payload.Key] || []), action.payload.Data],
            },
        };
    }
  
    case "UPDATE_DATA": {
        const data = state.data[action.payload.Key] || [];
        const index = data.findIndex((element) => element.ID === action.payload.Data.ID);
        if (index !== -1) {
            data[index] = action.payload.Data;
        }
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.Key]: data,
            },
        };
    }
  
    case "REMOVE_DATA": {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.Key]: state.data[action.payload.Key].filter((data) => data !== action.payload.Data),
            },
        };
    }

    case "GET_DATA_LOCAL_STORAGE": {
        // const getDataLocalStorageAction = action as GetDataLocalStorageAction;
        // const dataStorageData = await AsyncStorage.getItem(getDataLocalStorageAction.payload.Key);
        // if (!dataStorageData) {
        //     return state;
        // }

        // const parsedData = JSON.parse(dataStorageData as string);
        // return {
        //     ...state,
        //     data: {
        //         ...state.data,
        //         [getDataLocalStorageAction.payload.Key]: parsedData,
        //     },
        // };

        return state;
    }

    case "ADD_DATA_TO_LOCAL_STORAGE": {
        const data = state.data[action.payload.Key];
        if (!data) {
            return state;
        }

        // await AsyncStorage.setItem(addDataToLocalStoreAction.payload.Key, JSON.stringify(data));

        return state;
    }

    case "FETCH_DATA_REQUEST": {
        return {
            ...state,
            loading: true
        };
    }
  
    case "FETCH_DATA_REQUEST_FAILURE": {
        return {
          ...state,
          loading: false,
          error: action.payload.Error
        };
    }
  
    default:
        return state;
    }
  };
  
  