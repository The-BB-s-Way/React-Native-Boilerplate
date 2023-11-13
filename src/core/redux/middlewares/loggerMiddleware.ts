import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';

export const loggerMiddleware: Middleware = (api: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    console.log('Dispatching', action);
    let result = next(action);
    console.log('Next state', api.getState());
    return result;
};