import { Action } from "../../types/baseAction";

interface SetDataPayload{
    Key: string;
    Data: any;
}

export class SetDataAction implements Action<SetDataPayload> {
    type: string = "SET_DATA";
    payload: SetDataPayload;

    constructor(payload: SetDataPayload) {
        this.payload = payload;
    }
}