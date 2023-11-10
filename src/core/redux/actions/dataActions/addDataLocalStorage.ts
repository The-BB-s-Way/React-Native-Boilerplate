interface AddDataToLocalStorePayload {
    Key: string;
}

export const AddDataToLocalStoreAction = (payload: AddDataToLocalStorePayload) => {
    return {
        type: "ADD_DATA_TO_LOCAL_STORAGE",
        payload: payload,
    }
}