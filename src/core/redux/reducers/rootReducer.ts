import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { storageReducer } from './storageReducer';

export class ReducerFactory {
    public static combine() {
        return combineReducers({
            auth: authReducer,
            storage: storageReducer,
            storageStatic: storageReducer,
        });
    }
}