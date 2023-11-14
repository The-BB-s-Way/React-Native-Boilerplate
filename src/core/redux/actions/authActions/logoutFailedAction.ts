import { AnyAction } from "redux";


interface LogoutFailureActionPayload {
    Error: string;
}

export interface LogoutFailureAction extends AnyAction {
    payload: LogoutFailureActionPayload;
}

export const logoutFailureAction = (payload: LogoutFailureActionPayload): LogoutFailureAction => {
    return {
        type: "LOGOUT_FAILURE",
        payload: payload
    }
}