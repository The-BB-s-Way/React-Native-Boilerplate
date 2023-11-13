// import { createAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

interface UpdateDataPayload{
    Key: string;
    ID: number;
    Data: any;
}

export interface UpdateDataAction extends AnyAction {
    payload: UpdateDataPayload;
}

export const updateDataAction = (payload: UpdateDataPayload): UpdateDataAction => {
    return {
        type: "UPDATE_DATA",
        payload: payload,
    }
}