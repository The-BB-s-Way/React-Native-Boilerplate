import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchDataRequestAction, fetchDataRequestFailureAction, fetchDataRequestSuccessAction } from '../actions/dataActions/fetchDataRequestAction';
import axios from "axios";
import { setDataAction } from '../actions/dataActions/setDataAction';
import { addDataAction } from '../actions/dataActions/addDataAction';
import { axiosAuthInstance } from '../../sso/auth.interceptor';
import { RootState } from '../store';

export const fetchData = (ID: number, storeLabel: string, url: string, httpRequestType: string, isAuthRequired: boolean = false): ThunkAction<void, RootState, any, AnyAction> => {
    return async (dispatch, getState) => {
        const state = getState();

        if (state.storage.data[storeLabel]?.some(element => element.ID === ID)) {
            return;
        }

        dispatch(fetchDataRequestAction());

        const fetchData = async () => {
            try {
                const axiosRequestConfig = {
                    url: url,
                    method: httpRequestType,
                };

                const axiosIstance = isAuthRequired ? axiosAuthInstance : axios.create();

                const response = await axiosIstance.request(axiosRequestConfig);
                
                const data = {
                    Key: storeLabel,
                    Data: {
                        ID: ID,
                        Data: response.data
                    }
                }

                if (!Object.keys(state.storage.data).includes(storeLabel)) {
                    dispatch(setDataAction(data));
                } else {
                    dispatch(addDataAction(data));
                }

                dispatch(fetchDataRequestSuccessAction());

            } catch (error: any) {
                const errorMessage = error.message;
                dispatch(fetchDataRequestFailureAction({
                    Error: errorMessage
                }));
            }
        };

        await fetchData();
    };
};
