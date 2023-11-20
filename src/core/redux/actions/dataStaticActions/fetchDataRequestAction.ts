import { AnyAction } from "redux";


interface FetchDataStaticRequestFailureActionPayload {
    Error: string;
}
export interface FetchDataStaticRequestFailureAction extends AnyAction {
    payload: FetchDataStaticRequestFailureActionPayload;
}
export interface FetchDataStaticRequestAction extends AnyAction {
    payload: {};
}
export  interface FetchDataStaticRequestSuccessAction extends AnyAction {
    payload: {};
}

export const fetchDataStaticRequestFailureAction = (payload: FetchDataStaticRequestFailureActionPayload): FetchDataStaticRequestFailureAction => {
    return {
        type: "FETCH_DATA_STATIC_REQUEST_FAILURE",
        payload: payload,
    }
}

export const fetchDataStaticRequestAction = (): FetchDataStaticRequestAction => {
    return {
        type: "FETCH_DATA_STATIC_REQUEST",
        payload: {},
    }
}

export const fetchDataStaticRequestSuccessAction = (): FetchDataStaticRequestSuccessAction => {
    return {
        type: "FETCH_DATA_STATIC_REQUEST_SUCCESS",
        payload: {},
    }
}