export const FetchDataRequestAction = () => {
    return {
        type: "FETCH_DATA_REQUEST",
    }
}

interface FetchDataRequestFailureActionPayload {
    Error: string;
}

export const FetchDataRequestFailureAction = (payload: FetchDataRequestFailureActionPayload) => {
    return {
        type: "FETCH_DATA_REQUEST_FAILURE",
        payload: payload,
    }
}