import { AnyAction, createAction } from "@reduxjs/toolkit";

interface AddDataToLocalStorePayload {
    Key: string;
}

export interface AddDataToLocalStoreAction extends AnyAction {
    payload: AddDataToLocalStorePayload;
}

export const addDataToLocalStoreAction = (payload: AddDataToLocalStorePayload): AddDataToLocalStoreAction => {
    return {
        type: "ADD_DATA_TO_LOCAL_STORE",
        payload: payload,
    }
}