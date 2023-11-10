import { combineReducers } from '@reduxjs/toolkit';
import { AuthState, authReducer } from './authReducer';
import { StorageState, storageReducer } from './storageReducer';


export interface RootState {
    auth: AuthState;
    storage: StorageState;
}

// export const rootReducer = combineReducers({
//     auth: authReducer,
// });
export class ReducerFactory {
    public static combine() {
        return combineReducers({
            auth: authReducer,
            storage: storageReducer,
        });
    }
}