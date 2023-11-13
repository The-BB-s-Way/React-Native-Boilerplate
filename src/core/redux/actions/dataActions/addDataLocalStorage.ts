import { createAction } from "@reduxjs/toolkit";

interface AddDataToLocalStorePayload {
    Key: string;
}

export const AddDataToLocalStoreAction = createAction("ADD_DATA_TO_LOCAL_STORAGE", (payload: AddDataToLocalStorePayload) => {
    return {
        payload: payload,
    }
});