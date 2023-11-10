import { User } from "../../../sso/auth.types";

interface LoginPayload {
    Token: string;
    User: User;
}

export const LoginAction = (payload: LoginPayload) => {
    return {
        type: "LOGIN",
        payload: payload,
    }
}