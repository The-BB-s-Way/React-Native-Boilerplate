import { AnyAction } from "redux";
import { User } from "../../../sso/auth.types";
import { AuthUser } from "../../../sso/interfaces/user.interface";

interface UpdateUserPayload {
    User: AuthUser;
}

export interface UpdateUserAction extends AnyAction {
    payload: UpdateUserPayload;
}

export const updateUserAction = (payload: UpdateUserPayload): UpdateUserAction => {
    return {
        type: "UPDATE_USER",
        payload: payload
    }
}