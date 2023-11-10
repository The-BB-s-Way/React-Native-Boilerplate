import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { dataReducer } from './dataReducer';

// export const rootReducer = combineReducers({
//     auth: authReducer,
// });
export class ReducerFactory {
    public static combine() {
        return combineReducers({
            auth: authReducer,
            data: dataReducer,
        });
    }
}