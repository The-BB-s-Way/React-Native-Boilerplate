interface SetDataPayload{
    Key: string;
    Data: any;
}

// export class SetDataAction implements Action<SetDataPayload> {
//     type: string = "SET_DATA";
//     payload: SetDataPayload;

//     constructor(payload: SetDataPayload) {
//         this.payload = payload;
//     }
// }

export const SetDataAction = (payload: SetDataPayload) => {
    return {
        type: "SET_DATA",
        payload: payload,
    }
}