import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    user: authReducer, // Assegna il tuo reducer utente a una chiave "user"
    data: dataReducer // Assegna il tuo reducer dati a una chiave "data"
  });

export default rootReducer;