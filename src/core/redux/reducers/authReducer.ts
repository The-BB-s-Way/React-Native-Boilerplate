import { createReducer } from "@reduxjs/toolkit";
import { AuthUser } from "../../sso/interfaces/user.interface";
import { LogoutAction, logoutAction } from "../actions/authActions/logoutAction";
import { LoginAction } from "../actions/authActions/loginAction";
import { SetTokenAction } from "../actions/authActions/refreshTokenAction";
import { UpdateUserAction } from "../actions/authActions/updateProfileAction";

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

    builder.addCase("LOGOUT", (state, action: LogoutAction) => {
        if (action.payload?.Success) {
            return {
                IsLoggedIn: false,
                AccessToken: null,
                User: null,
                IsAdmin: false,
                Loading: false,
                Error: null,
            };
        }
        return state;
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
});