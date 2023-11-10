import { Action } from "../../types/baseAction";

interface FetchDataPayload {
    ID: string;
    Label: string;
    URL: string;
}

interface FetchDataRequestFailurePayload {
    ID: string;
    Label: string;
    URL: string;
}

export class FetchDataRequestAction implements Action<FetchDataPayload> {
    type: string = "FETCH_DATA_REQUEST";
    payload: FetchDataPayload;

    constructor(payload: FetchDataPayload) {
        this.payload = payload;
    }
}

export class FetchDataRequestFailureAction implements Action<FetchDataRequestFailurePayload> {
    type: string = "FETCH_DATA_REQUEST_FAILURE";
    payload: FetchDataRequestFailurePayload;

    constructor(payload: FetchDataRequestFailurePayload) {
        this.payload = payload;
    }
}