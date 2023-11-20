// import { createAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";

interface SetDataStaticPayload{
    Key: string;
    Data: any;
}

export interface SetDataStaticAction extends AnyAction {
    payload: SetDataStaticPayload;
}

export const setDataStaticAction = (payload: SetDataStaticPayload): SetDataStaticAction => {
    return {
        type: "SET_DATA_STATIC",
        payload: payload,
    }
}