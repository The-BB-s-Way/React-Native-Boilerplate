import { Action } from "../../types/baseAction";

interface RefreshTokenPayload {
    Token: string;
}

export class RefreshTokenAction implements Action<RefreshTokenPayload> {
    type: string = "REFRESH_TOKEN";
    payload: RefreshTokenPayload;

    constructor(payload: RefreshTokenPayload) {
        this.payload = payload;
    }
}