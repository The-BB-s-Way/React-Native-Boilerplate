interface UpdateDataPayload{
    Key: string;
    ID: number;
    Data: any;
}

export const UpdateDataAction = (payload: UpdateDataPayload) => {
    return {
        type: "UPDATE_DATA",
        payload: payload,
    }
}