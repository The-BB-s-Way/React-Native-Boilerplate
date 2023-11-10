import { Action } from "../../types/baseAction";
import { User } from "../../../sso/interfaces/user";

interface UpdateProfilePayload {
    User: User;
}

export class UpdateProfileAction implements Action<UpdateProfilePayload> {
    type: string = "UPDATE_PROFILE";
    payload: UpdateProfilePayload;

    constructor(payload: UpdateProfilePayload) {
        this.payload = payload;
    }
}