import { AnyAction } from "redux";

interface RemoveDataPayload {
    Key: string;
    Data: any;
}

export interface RemoveDataAction extends AnyAction {
    payload: RemoveDataPayload;
}

export const removeDataAction = (payload: RemoveDataPayload): RemoveDataAction => {
    return {
        type: "REMOVE_DATA",
        payload: payload,
    }
}
