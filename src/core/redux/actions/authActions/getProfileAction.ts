import { Action } from "../../types/baseAction";
import { User } from "../../../sso/interfaces/user";

interface GetProfilePayload {
    User: User;
}

export class GetProfileAction implements Action<GetProfilePayload> {
    type: string = "GET_PROFILE";
    payload: GetProfilePayload;

    constructor(payload: GetProfilePayload) {
        this.payload = payload;
    }
}