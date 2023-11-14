import { AnyAction } from "redux";

export interface AuthErrorResetAction extends AnyAction {}

export const authErrorResetAction = (): AuthErrorResetAction => {
    return {
        type: "AUTH_ERROR_RESET"
    }
}