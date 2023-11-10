import { Action } from "../../types/baseAction";

interface UpdateDataPayload{
    Key: string;
    ID: number;
    Data: any;
}

export class UpdateDataAction implements Action<UpdateDataPayload> {
    type: string = "UPDATE_DATA";
    payload: UpdateDataPayload;

    constructor(payload: UpdateDataPayload) {
        this.payload = payload;
    }
}