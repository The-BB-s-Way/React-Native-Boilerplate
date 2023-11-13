import { createAction } from "@reduxjs/toolkit";
import { User } from "../../../sso/auth.types";

interface UpdateProfilePayload {
    User: User;
}

export const UpdateProfileAction = createAction("UPDATE_PROFILE", (payload: UpdateProfilePayload) => {
    return {
        payload: payload,
    }
});