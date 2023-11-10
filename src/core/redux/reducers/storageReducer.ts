import { AddDataAction } from "../actions/dataActions/addDataAction";
import { FetchDataRequestFailureAction } from "../actions/dataActions/fetchDataRequestAction";
import { GetDataLocalStorageAction } from "../actions/dataActions/getDataLocalStorage";
import { RemoveDataAction } from "../actions/dataActions/removeDataAction";
import { SetDataAction } from "../actions/dataActions/setDataAction";
import { Action } from "../types/baseAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const storageReducer = (state: StorageState = initialState, action: Action) => {
    switch (action.type) {
        case "SET_DATA": {
            const setDataAction = action as SetDataAction;
        return {
            ...state,
            data: {
                ...state.data,
                [setDataAction.payload.Key]: [setDataAction.payload.Data],
            },
        };
    }
  
    case "ADD_DATA": {
        const addDataAction = action as AddDataAction;
            return {
                ...state,
                data: {
                    ...state.data,
                    [addDataAction.payload.Key]: [...(state.data[addDataAction.payload.Key] || []), addDataAction.payload.Data],
            },
        };
    }
  
    case "UPDATE_DATA": {
        const updateDataAction = action as SetDataAction;
        const data = state.data[updateDataAction.payload.Key] || [];
        const index = data.findIndex((element) => element.ID === updateDataAction.payload.Data.ID);
        if (index !== -1) {
            data[index] = updateDataAction.payload.Data;
        }
        return {
            ...state,
            data: {
                ...state.data,
                [updateDataAction.payload.Key]: data,
            },
        };
    }
  
    case "REMOVE_DATA": {
        const removeDataAction = action as RemoveDataAction;
        return {
            ...state,
            data: {
                ...state.data,
                [removeDataAction.payload.Key]: state.data[removeDataAction.payload.Key].filter((data) => data !== removeDataAction.payload.Data),
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
        const addDataToLocalStoreAction = action as AddDataAction;
        const data = state.data[addDataToLocalStoreAction.payload.Key];
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
        const failureAction = action as FetchDataRequestFailureAction;
        return {
          ...state,
          loading: false,
          error: failureAction.payload.Error
        };
    }
  
    default:
        return state;
    }
  };
  
  