import { createAction } from "@reduxjs/toolkit";

interface RemoveDataPayload {
    Key: string;
    Data: any;
}

export const RemoveDataAction = createAction("REMOVE_DATA", (payload: RemoveDataPayload) => {
    return {
        payload: payload,
    }
});