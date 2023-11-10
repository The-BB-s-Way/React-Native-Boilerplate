import { Action } from "../../types/baseAction";

interface AddDataPayload {
    Key: string;
    Data: any;
}

export class AddDataAction implements Action<AddDataPayload> {
    type: string = "ADD_DATA";
    payload: AddDataPayload;

    constructor(payload: AddDataPayload) {
        this.payload = payload;
    }
}