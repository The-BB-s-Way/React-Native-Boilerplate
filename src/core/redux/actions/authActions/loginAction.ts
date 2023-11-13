import { User } from "../../../sso/auth.types";
import { createAction } from '@reduxjs/toolkit';

interface LoginPayload {
    Token: string;
    User: User;
}

export const LoginAction = createAction("LOGIN", (payload: LoginPayload) => {
    return {
        payload: payload,
    }
});