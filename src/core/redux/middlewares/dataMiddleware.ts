import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { FetchDataRequestAction, FetchDataRequestFailureAction } from '../actions/dataActions/fetchDataRequestAction';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface AppState {
  data: { [key: string]: any[] };
}

// Thunk Action Creator
export const fetchDataIfNeeded = (ID: string, label: string, url: string, httpRequestType: string, axiosIstance: AxiosInstance): ThunkAction<void, AppState, any, AnyAction> => {
    return (dispatch, getState) => {
        const state = getState();
        const data = state.data[label].find((element) => element.ID === ID);
        if (data) {
            return;
        }

        dispatch(new FetchDataRequestAction({ 
            ID: ID,
            Label: label,
            URL: url
        }));

        const axiosRequestConfig: AxiosRequestConfig = {
            url: url,
            method: httpRequestType,
        };

        axiosIstance.request(axiosRequestConfig)
            .then((response: AxiosResponse) => {
                dispatch(new FetchDataRequestFailureAction({ 
                    ID: ID,
                    Label: label,
                    URL: url
                }));
            })
            .catch((error) => {
                dispatch(new FetchDataRequestFailureAction({ 
                    ID: ID,
                    Label: label,
                    URL: url
                }));
            });
    };
};
  
