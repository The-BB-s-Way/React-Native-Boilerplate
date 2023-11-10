import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import { Action } from "./types/baseAction";
import { ReducerFactory, RootState } from "./reducers/rootReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// export class ReduxStore {
//     private constructor(
//         private store = configureStore({
//             reducer: ReducerFactory.combine(),
//             middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, thunk),
//         })
//     ) { }
    
//     private static INSTANCE: ReduxStore;
//     public static getInstance(): ReduxStore {
//         if (!ReduxStore.INSTANCE) {
//             ReduxStore.INSTANCE = new ReduxStore();
//         }
//         return ReduxStore.INSTANCE;
//     }

//     public getStore() {
//         return this.store;
//     }
    
//     public getState() {
//         return this.store.getState();
//     }

//     public dispatch(action: Action) {
//         this.store.dispatch(action);
//     }
// }



// export const ReduxStore = configureStore({
//     reducer: ReducerFactory.combine(),
//     // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, thunk),
//     applyMiddleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, thunk),
// })

export const ReduxStore = createStore(
    ReducerFactory.combine(),
    applyMiddleware(thunk)
);

export const useDispatch = (): ThunkDispatch<RootState, any, AnyAction> => ReduxStore.dispatch;