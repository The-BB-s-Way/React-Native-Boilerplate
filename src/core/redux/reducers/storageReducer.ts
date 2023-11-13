import { AnyAction } from "redux";
import { createReducer } from "@reduxjs/toolkit";

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

export const storageReducer = createReducer(initialState, (builder) => {
    builder.addCase("SET_DATA", (state, action: AnyAction) => {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.Key]: [action.payload.Data],
            },
        };
    });

    builder.addCase("ADD_DATA", (state, action: AnyAction) => {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.Key]: [...(state.data[action.payload.Key] || []), action.payload.Data],
            },
        };
    });

    builder.addCase("UPDATE_DATA", (state, action: AnyAction) => {
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
    });

    builder.addCase("REMOVE_DATA", (state, action: AnyAction) => {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.Key]: state.data[action.payload.Key].filter((data) => data !== action.payload.Data),
            },
        };
    });

    builder.addCase("GET_DATA_LOCAL_STORAGE", (state, action: AnyAction) => {
        return state;
    });

    builder.addCase("ADD_DATA_TO_LOCAL_STORAGE", (state, action: AnyAction) => {
        return state;
    });

    builder.addCase("FETCH_DATA_REQUEST", (state, action: AnyAction) => {
        return {
            ...state,
            loading: true,
        };
    });

    builder.addCase("FETCH_DATA_REQUEST_FAILURE", (state, action: AnyAction) => {
        return {
            ...state,
            loading: false,
            error: action.payload.Error,
        };
    });

    builder.addCase("FETCH_DATA_REQUEST_SUCCESS", (state, action: AnyAction) => {
        return {
            ...state,
            loading: false,
        };
    });
});