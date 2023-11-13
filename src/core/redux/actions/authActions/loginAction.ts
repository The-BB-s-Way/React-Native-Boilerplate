import { AnyAction } from "redux";
import { LoginResponse } from "../../../sso/interfaces/login.interface";

export interface LoginAction extends AnyAction {
    payload: LoginResponse;
}

export const loginAction = (payload: LoginResponse): LoginAction => {
    return {
        type: "LOGIN",
        payload: payload
    }
}