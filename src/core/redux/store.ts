import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ReducerFactory, RootState } from "./reducers/rootReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";


export const ReduxStore = configureStore({
    reducer: ReducerFactory.combine(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, thunk),
})

export const useDispatch = (): ThunkDispatch<RootState, any, AnyAction> => ReduxStore.dispatch;