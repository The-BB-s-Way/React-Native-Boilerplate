import { User } from "../../../sso/auth.types";

interface UpdateProfilePayload {
    User: User;
}

// export class UpdateProfileAction implements Action<UpdateProfilePayload> {
//     type: string = "UPDATE_PROFILE";
//     payload: UpdateProfilePayload;

//     constructor(payload: UpdateProfilePayload) {
//         this.payload = payload;
//     }
// }

export const UpdateProfileAction = (payload: UpdateProfilePayload) => {
    return {
        type: "UPDATE_PROFILE",
        payload: payload,
    }
}