import { AnyAction } from "redux";

interface GetDataLocalStoragePayload {
    Key: string;
}

export interface GetDataLocalStorageAction extends AnyAction{
    payload: GetDataLocalStoragePayload;
}

export const getDataLocalStorageAction = (payload: GetDataLocalStoragePayload): GetDataLocalStorageAction => {
    return {
        type: "GET_DATA_LOCAL_STORAGE",
        payload: payload,
    }
}