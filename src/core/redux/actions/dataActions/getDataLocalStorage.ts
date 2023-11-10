import { Action } from "../../types/baseAction";

interface GetDataLocalStoragePayload {
    Key: string;
}

export class GetDataLocalStorageAction implements Action<GetDataLocalStoragePayload> {
    type: string = "GET_DATA_LOCAL_STORAGE";
    payload: GetDataLocalStoragePayload;

    constructor(payload: GetDataLocalStoragePayload) {
        this.payload = payload;
    }
}