
import { AnyAction } from "redux";
import { User } from "../../sso/auth.types";
import { createReducer } from "@reduxjs/toolkit";

export interface AuthState {
  IsLoggedIn: boolean;
  Token: string | null;
  User: User | null;
  Loading: boolean;
  Error: string | null;
}

const initialState: AuthState = {
  IsLoggedIn: false,
  Token: null,
  User: null,
  Loading: false,
  Error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase("LOGIN", (state, action: AnyAction) => {
        return {
            IsLoggedIn: true,
            Token: action.payload?.Token ?? state.Token,
            User: action.payload?.User ?? state.User,
            Loading: false,
            Error: null,
        };
    });

    builder.addCase("LOGOUT", (state, action: AnyAction) => {
        if (action.payload?.Success) {
            return {
                IsLoggedIn: false,
                Token: null,
                User: null,
                Loading: false,
                Error: null,
            };
        }
        return state;
    });

    builder.addCase("REFRESH_TOKEN", (state, action: AnyAction) => {
        return {
            ...state,
            Token: action.payload?.Token ?? state.Token,
        };
    });
    
    builder.addCase("UPDATE_USER", (state, action: AnyAction) => {
        return {
            ...state,
            User: action.payload?.User ?? state.User,
        };
    });
});