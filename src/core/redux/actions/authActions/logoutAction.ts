interface LogoutPayload {
    Success: boolean;
}

export const LogoutAction = (payload: LogoutPayload) => {
    return {
        type: "LOGOUT",
        payload: payload,
    }
}