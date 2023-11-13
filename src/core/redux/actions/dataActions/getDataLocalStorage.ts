import { createAction } from "@reduxjs/toolkit";

interface GetDataLocalStoragePayload {
    Key: string;
}

export const GetDataLocalStorageAction = createAction("GET_DATA_LOCAL_STORAGE", (payload: GetDataLocalStoragePayload) => {
    return {
        payload: payload,
    }
});