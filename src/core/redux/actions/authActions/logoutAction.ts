import { createAction } from "@reduxjs/toolkit";

interface LogoutPayload {
    Success: boolean;
}

export const LogoutAction = createAction("LOGOUT", (payload: LogoutPayload) => {
    return {
        payload: payload,
    }
});