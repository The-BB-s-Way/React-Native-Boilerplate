import { Action } from "../../types/baseAction";


export class FetchDataRequestAction implements Action {
    type: string = "FETCH_DATA_REQUEST";
}


interface FetchDataRequestFailureActionPayload {
    Error: string;
}

export class FetchDataRequestFailureAction implements Action<FetchDataRequestFailureActionPayload> {
    type: string = "FETCH_DATA_REQUEST_FAILURE";
    payload: FetchDataRequestFailureActionPayload;

    constructor(payload: FetchDataRequestFailureActionPayload) {
        this.payload = payload;
    }
}