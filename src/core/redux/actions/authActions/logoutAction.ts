import { AnyAction } from "redux";

export interface LogoutAction extends AnyAction {}

export const logoutAction = (): LogoutAction => {
    return {
        type: "LOGOUT"
    }
}