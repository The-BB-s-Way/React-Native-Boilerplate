import { createAction } from "@reduxjs/toolkit";

interface AddDataPayload {
    Key: string;
    Data: any;
}

export const AddDataAction = createAction("ADD_DATA", (payload: AddDataPayload) => {
    return {
        payload: payload,
    }
});
