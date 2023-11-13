import { AnyAction, createAction } from "@reduxjs/toolkit";

interface AddDataPayload {
    Key: string;
    Data: any;
}

export interface AddDataAction extends AnyAction {
    payload: AddDataPayload;
}

export const addDataAction = (payload: AddDataPayload): AddDataAction => {
    return {
        type: "ADD_DATA",
        payload: payload,
    }
}
