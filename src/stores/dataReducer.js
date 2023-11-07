const initialState = {
    data: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'data':
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}

export const setData = (data) => ({
    type: 'data',
    payload: data,
});

export default dataReducer;
