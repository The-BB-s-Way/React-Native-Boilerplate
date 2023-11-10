import { Action } from "../../types/baseAction";

interface AddDataToLocalStorePayload {
    Key: string;
}

export class AddDataToLocalStoreAction implements Action<AddDataToLocalStorePayload> {
    type: string = "ADD_DATA_TO_LOCAL_STORAGE";
    payload: AddDataToLocalStorePayload;

    constructor(payload: AddDataToLocalStorePayload) {
        this.payload = payload;
    }
}