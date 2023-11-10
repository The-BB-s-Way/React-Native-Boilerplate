import { Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { Action } from '../types/baseAction';

export const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    console.log('Dispatching', action);
    let result = next(action);
    console.log('Next state', api.getState());
    return result;
};