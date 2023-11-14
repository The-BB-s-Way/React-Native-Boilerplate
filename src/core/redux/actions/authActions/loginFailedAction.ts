import { AnyAction } from "redux";


interface LoginFailureActionPayload {
    Error: string;
}

export interface LoginFailureAction extends AnyAction {
    payload: LoginFailureActionPayload;
}

export const loginFailureAction = (payload: LoginFailureActionPayload): LoginFailureAction => {
    return {
        type: "LOGIN_FAILURE",
        payload: payload
    }
}