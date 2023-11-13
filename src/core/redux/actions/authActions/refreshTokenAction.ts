import { createAction } from "@reduxjs/toolkit";

interface RefreshTokenPayload {
    Token: string;
}

export const RefreshTokenAction = createAction("REFRESH_TOKEN", (payload: RefreshTokenPayload) => {
    return {
        payload: payload,
    }
});