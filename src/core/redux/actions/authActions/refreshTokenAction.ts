import { AnyAction } from "redux";

interface SetTokenPayload {
    AccessToken: string;
}

export interface SetTokenAction extends AnyAction {
    payload: SetTokenPayload;
}

export const setTokenAction = (payload: SetTokenPayload): SetTokenAction => {
    return {
        type: "SET_TOKEN",
        payload: payload
    }
}