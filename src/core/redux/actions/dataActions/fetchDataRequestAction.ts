import { createAction } from "@reduxjs/toolkit";

interface FetchDataRequestFailureActionPayload {
    Error: string;
}

export const FetchDataRequestFailureAction = createAction("FETCH_DATA_REQUEST_FAILURE", (payload: FetchDataRequestFailureActionPayload) => {
    return {
        payload: payload,
    }
});

export const FetchDataRequestAction = createAction("FETCH_DATA_REQUEST", () => {
    return {
        payload: {},
    }    
});

export const FetchDataRequestSuccessAction = createAction("FETCH_DATA_REQUEST_SUCCESS", () => {
    return {
        payload: {},
    }
});