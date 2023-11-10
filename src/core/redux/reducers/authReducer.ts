import { User } from "../../sso/interfaces/user";
import { GetProfileAction } from "../actions/authActions/getProfileAction";
import { LoginAction } from "../actions/authActions/loginAction";
import { LogoutAction } from "../actions/authActions/logoutAction";
import { RefreshTokenAction } from "../actions/authActions/refreshTokenAction";
import { UpdateProfileAction } from "../actions/authActions/updateProfileAction";
import { Action } from "../types/baseAction";

interface AuthState {
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

export const authReducer = (state = initialState, action: Action): AuthState => {
    switch (action.type) {
        case "LOGIN": {
            const loginAction = action as LoginAction;
            return {
                IsLoggedIn: true,
                Token: loginAction.payload?.Token ?? state.Token,
                User: loginAction.payload?.User ?? state.User,
                Loading: false,
                Error: null,
            };
        }
        case "LOGOUT": {
            const logoutAction = action as LogoutAction;
            if (logoutAction.payload?.Success) {
                return {
                    IsLoggedIn: false,
                    Token: null,
                    User: null,
                    Loading: false,
                    Error: null,
                };
            }
            return state;
        }
        case "REFRESH_TOKEN": {
            const refreshTokenAction = action as RefreshTokenAction;
            return {
                ...state,
                Token: refreshTokenAction.payload?.Token ?? state.Token,
            };
        }
        case "GET_USER": {
            const getUserAction = action as GetProfileAction;
            return {
                ...state,
                User: getUserAction.payload?.User ?? state.User,
            };
        }
        case "UPDATE_USER": {
            const updateUserAction = action as UpdateProfileAction;
            return {
                ...state,
                User: updateUserAction.payload?.User ?? state.User,
            };
        }


        default:
            return state;
  }
};