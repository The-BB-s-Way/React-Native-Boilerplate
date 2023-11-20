import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from "axios";
import { axiosAuthInstance } from '../../sso/auth.interceptor';
import { setDataStaticAction } from '../actions/dataStaticActions/setDataStaticAction';
import { fetchDataStaticRequestAction, fetchDataStaticRequestFailureAction, fetchDataStaticRequestSuccessAction } from '../actions/dataStaticActions/fetchDataRequestAction';
import { RootState } from '../store';

interface HttpRequestOptions {
    url: string;
    method: string;
    body?: any;
    headers?: any;
}

export const fetchDataStatic = (storeLabel: string, httpRequestOptions: HttpRequestOptions, isAuthRequired: boolean = false): ThunkAction<void, RootState, any, AnyAction> => {
    return async (dispatch, getState) => {
        const state = getState();

        if (state.storageStatic.data[storeLabel]) {
            return;
        }

        dispatch(fetchDataStaticRequestAction());

        const fetchData = async () => {
            try {
                const axiosRequestConfig = {
                    url: httpRequestOptions.url,
                    method: httpRequestOptions.method,
                };

                const axiosIstance = isAuthRequired ? axiosAuthInstance : axios.create();

                const response = await axiosIstance.request(axiosRequestConfig);
                
                const data = {
                    Key: storeLabel,
                    Data: response.data
                }

                dispatch(setDataStaticAction(data));

                dispatch(fetchDataStaticRequestSuccessAction());

            } catch (error: any) {
                const errorMessage = error.message;
                dispatch(fetchDataStaticRequestFailureAction({
                    Error: errorMessage
                }));
            }
        };

        await fetchData();
    };
};
