import { createAction } from "@reduxjs/toolkit";
interface UpdateDataPayload{
    Key: string;
    ID: number;
    Data: any;
}

export const UpdateDataAction = createAction("UPDATE_DATA", (payload: UpdateDataPayload) => {
    return {
        payload: payload,
    }
});