import { AnyAction } from "redux";

interface RemoveDataStaticPayload {
    Key: string;
    Data: any;
}

export interface RemoveDataStaticAction extends AnyAction {
    payload: RemoveDataStaticPayload;
}

export const removeDataStaticAction = (payload: RemoveDataStaticPayload): RemoveDataStaticAction => {
    return {
        type: "REMOVE_DATA_STATIC",
        payload: payload,
    }
}
