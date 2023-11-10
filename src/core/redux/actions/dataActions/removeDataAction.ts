interface RemoveDataPayload {
    Key: string;
    Data: any;
}

// export class RemoveDataAction implements Action<RemoveDataPayload> {
//     type: string = "REMOVE_DATA";
//     payload: RemoveDataPayload;

//     constructor(payload: RemoveDataPayload) {
//         this.payload = payload;
//     }
// }

export const RemoveDataAction = (payload: RemoveDataPayload) => {
    return {
        type: "REMOVE_DATA",
        payload: payload,
    }
}