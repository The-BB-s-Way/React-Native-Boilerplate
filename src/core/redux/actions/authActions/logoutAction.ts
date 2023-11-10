import { Action } from "../../types/baseAction";

interface LogoutPayload {
    Success: boolean;
}

export class LogoutAction implements Action<LogoutPayload> {
    type: string = "LOGOUT";
    payload: LogoutPayload;

    constructor(payload: LogoutPayload) {
        this.payload = payload;
    }
}