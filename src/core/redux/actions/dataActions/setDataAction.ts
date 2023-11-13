// import { createAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";

interface SetDataPayload{
    Key: string;
    Data: any;
}

export interface SetDataAction extends AnyAction {
    payload: SetDataPayload;
}

export const setDataAction = (payload: SetDataPayload): SetDataAction => {
    return {
        type: "SET_DATA",
        payload: payload,
    }
}