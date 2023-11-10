import { Action } from "../../types/baseAction";
import { User } from "../../../sso/interfaces/user";

interface LoginPayload {
    Token: string;
    User: User;
}

export class LoginAction implements Action<LoginPayload> {
    type: string = "LOGIN";
    payload: LoginPayload;

    constructor(payload: LoginPayload) {
        this.payload = payload;
    }

}