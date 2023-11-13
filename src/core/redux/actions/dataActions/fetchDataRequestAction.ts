import { AnyAction } from "redux";


interface FetchDataRequestFailureActionPayload {
    Error: string;
}
export interface FetchDataRequestFailureAction extends AnyAction {
    payload: FetchDataRequestFailureActionPayload;
}
export interface FetchDataRequestAction extends AnyAction {
    payload: {};
}
export  interface FetchDataRequestSuccessAction extends AnyAction {
    payload: {};
}

export const fetchDataRequestFailureAction = (payload: FetchDataRequestFailureActionPayload): FetchDataRequestFailureAction => {
    return {
        type: "FETCH_DATA_REQUEST_FAILURE",
        payload: payload,
    }
}

export const fetchDataRequestAction = (): FetchDataRequestAction => {
    return {
        type: "FETCH_DATA_REQUEST",
        payload: {},
    }
}

export const fetchDataRequestSuccessAction = (): FetchDataRequestSuccessAction => {
    return {
        type: "FETCH_DATA_REQUEST_SUCCESS",
        payload: {},
    }
}