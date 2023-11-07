import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    user: authReducer, // Assegna il tuo reducer utente a una chiave "user"
  });

export default rootReducer;