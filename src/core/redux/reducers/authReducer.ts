
import { AnyAction } from "redux";
import { User } from "../../sso/auth.types";

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

export const authReducer = (state = initialState, action: AnyAction): AuthState => {
    switch (action.type) {
        case "LOGIN": {
            return {
                IsLoggedIn: true,
                Token: action.payload?.Token ?? state.Token,
                User: action.payload?.User ?? state.User,
                Loading: false,
                Error: null,
            };
        }
        case "LOGOUT": {

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
        }
        case "REFRESH_TOKEN": {

            return {
                ...state,
                Token: action.payload?.Token ?? state.Token,
            };
        }
        case "UPDATE_USER": {

            return {
                ...state,
                User: action.payload?.User ?? state.User,
            };
        }
        default:
            return state;
  }
};