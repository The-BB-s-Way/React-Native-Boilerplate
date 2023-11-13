import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { FetchDataRequestAction, FetchDataRequestFailureAction } from '../actions/dataActions/fetchDataRequestAction';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { SetDataAction } from '../actions/dataActions/setDataAction';
import { RootState } from '../reducers/rootReducer';
import { AddDataAction } from '../actions/dataActions/addDataAction';


export const fetchData = (ID: number, label: string, url: string, httpRequestType: string, axiosInstance: AxiosInstance): ThunkAction<void, RootState, any, AnyAction> => {
    return (dispatch, getState) => {
        const state = getState();

        if (state.storage.data[label]?.some(element => element.ID === ID)) {
            return;
        }

        dispatch(FetchDataRequestAction());

        const fetchData = async () => {
            try {
                const axiosRequestConfig = {
                    url: url,
                    method: httpRequestType,
                };

                const response = await axiosInstance.request(axiosRequestConfig);
                
                const data = {
                    Key: label,
                    Data: {
                        ID: ID,
                        Data: response.data
                    }
                }

                if (!Object.keys(state.storage.data).includes(label)) {
                    dispatch(SetDataAction(data));
                } else {
                    dispatch(AddDataAction(data));
                }
            } catch (error: any) {
                const errorMessage = error.message;
                dispatch(FetchDataRequestFailureAction({
                    Error: errorMessage
                }));
                dispatch({
                    type: 'FETCH_DATA_REQUEST_FAILURE',
                    payload: { Error: errorMessage }
                });
            }
        };

        fetchData();
    };
};
