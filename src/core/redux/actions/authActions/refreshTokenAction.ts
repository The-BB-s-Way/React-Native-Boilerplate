interface RefreshTokenPayload {
    Token: string;
}

// export class RefreshTokenAction implements Action<RefreshTokenPayload> {
//     type: string = "REFRESH_TOKEN";
//     payload: RefreshTokenPayload;

//     constructor(payload: RefreshTokenPayload) {
//         this.payload = payload;
//     }
// }

export const RefreshTokenAction = (payload: RefreshTokenPayload) => {
    return {
        type: "REFRESH_TOKEN",
        payload: payload,
    }
}