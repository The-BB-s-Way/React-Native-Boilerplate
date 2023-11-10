interface AddDataPayload {
    Key: string;
    Data: any;
}

export const AddDataAction = (payload: AddDataPayload) => {
    return {
        type: "ADD_DATA",
        payload: payload,
    }
}