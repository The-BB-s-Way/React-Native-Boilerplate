import { createAction } from "@reduxjs/toolkit";
interface SetDataPayload{
    Key: string;
    Data: any;
}

export const SetDataAction = createAction("SET_DATA", (payload: SetDataPayload) => {
    return {
        payload: payload,
    }
});