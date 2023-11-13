import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { FetchDataRequestAction, FetchDataRequestFailureAction, FetchDataRequestSuccessAction } from '../actions/dataActions/fetchDataRequestAction';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { SetDataAction } from '../actions/dataActions/setDataAction';
import { RootState } from '../reducers/rootReducer';
import { AddDataAction } from '../actions/dataActions/addDataAction';
import { axiosAuthInstance } from '../../sso/auth.interceptor';


export const fetchData = (ID: number, label: string, url: string, httpRequestType: string, isAuthRequired: boolean = false): ThunkAction<void, RootState, any, AnyAction> => {
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

                const axiosIstance = isAuthRequired ? axiosAuthInstance : axios.create();

                const response = await axiosIstance.request(axiosRequestConfig);
                
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

                dispatch(FetchDataRequestSuccessAction());

            } catch (error: any) {
                const errorMessage = error.message;
                dispatch(FetchDataRequestFailureAction({
                    Error: errorMessage
                }));
            }
        };

        fetchData();
    };
};
