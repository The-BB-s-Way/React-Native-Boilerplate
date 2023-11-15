import { createReducer } from "@reduxjs/toolkit";
import { AuthUser } from "../../sso/interfaces/user.interface";
import { LogoutAction } from "../actions/authActions/logoutAction";
import { LoginAction } from "../actions/authActions/loginAction";
import { SetTokenAction } from "../actions/authActions/refreshTokenAction";
import { UpdateUserAction } from "../actions/authActions/updateProfileAction";
import { LoginFailureAction } from "../actions/authActions/loginFailedAction";
import { LogoutFailureAction } from "../actions/authActions/logoutFailedAction";
import { AuthErrorResetAction } from "../actions/authActions/authErrorResetAction";

import { PURGE } from "redux-persist";

export interface AuthState {
  IsLoggedIn: boolean;
  AccessToken: string | null;
  User: AuthUser | null;
  IsAdmin: boolean;
  Loading: boolean;
  Error: string | null;
}

const initialState: AuthState = {
    IsLoggedIn: false,
    AccessToken: null,
    User: null,
    IsAdmin: false,
    Loading: false,
    Error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase("LOGIN", (state, action: LoginAction) => {
        // return {
        //     IsLoggedIn: true,
        //     Token: action.payload?.Token ?? state.AccessToken,
        //     User: action.payload?.User ?? state.User,
        //     Loading: false,
        //     Error: null,
        // };
        return {
            ...state,
            IsLoggedIn: true,
            AccessToken: action.payload?.Token ?? state.AccessToken,
            User: action.payload?.User ?? state.User,
            IsAdmin: action.payload?.IsAdmin ?? state.IsAdmin,
            Loading: false,
            Error: null,
        };
    });

    builder.addCase("LOGIN_FAILURE", (state, action: LoginFailureAction) => {
        return {
            ...state,
            Loading: false,
            Error: action.payload?.Error ?? state.Error,
        };
    });

    builder.addCase("LOGOUT", (state, action: LogoutAction) => {
        return {
            IsLoggedIn: false,
            AccessToken: null,
            User: null,
            IsAdmin: false,
            Loading: false,
            Error: null,
        };
    });

    builder.addCase("LOGOUT_FAILURE", (state, action: LogoutFailureAction) => {
        return {
            ...state,
            Loading: false,
            Error: action.payload?.Error ?? state.Error,
        };
    });

    builder.addCase("SET_TOKEN", (state, action: SetTokenAction) => {
        return {
            ...state,
            AccessToken: action.payload?.AccessToken ?? state.AccessToken,
        };
    });
    
    builder.addCase("UPDATE_USER", (state, action: UpdateUserAction) => {
        return {
            ...state,
            User: action.payload?.User ?? state.User,
        };
    });

    builder.addCase("AUTH_ERROR_RESET", (state, action: AuthErrorResetAction) => {
        return {
            ...state,
            Error: null,
        }
    });

});