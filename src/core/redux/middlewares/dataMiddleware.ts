import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { FetchDataRequestAction, FetchDataRequestFailureAction } from '../actions/dataActions/fetchDataRequestAction';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { SetDataAction } from '../actions/dataActions/setDataAction';
import { RootState } from '../reducers/rootReducer';


export const fetchData = (ID: number, label: string, url: string, httpRequestType: string, axiosIstance: AxiosInstance): ThunkAction<void, RootState, any, AnyAction> => {
    return (dispatch, getState) => {
        const state = getState();
        const data = state.storage.data[label].find((element) => element.ID === ID);
        if (data) {
            return;
        }

        dispatch(new FetchDataRequestAction());

        const axiosRequestConfig: AxiosRequestConfig = {
            url: url,
            method: httpRequestType,
        };

        axiosIstance.request(axiosRequestConfig)
            .then((response: AxiosResponse) => {
                dispatch(new SetDataAction({
                    Key: label,
                    Data: {
                        ID: ID,
                        Data: response.data
                    }
                }));
            })
            .catch((error) => {
                dispatch(new FetchDataRequestFailureAction({ 
                    Error: error.message
                }));
            });
    };
};