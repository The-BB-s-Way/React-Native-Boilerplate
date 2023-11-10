import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { Action } from "./types/baseAction";
import { ReducerFactory } from "./reducers/rootReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";


export class ReduxStore {
    private constructor(
        private store = configureStore({
            reducer: ReducerFactory.combine(),
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, thunk),
        })
    ) { }
    
    private static INSTANCE: ReduxStore;
    public static getInstance(): ReduxStore {
        if (!ReduxStore.INSTANCE) {
            ReduxStore.INSTANCE = new ReduxStore();
        }
        return ReduxStore.INSTANCE;
    }

    public getStore() {
        return this.store;
    }
    
    public getState() {
        return this.store.getState();
    }

    public dispatch(action: Action) {
        this.store.dispatch(action);
    }
}