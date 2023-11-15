import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ReducerFactory, RootState } from "./reducers/rootReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  whitelist: ['auth'] // Solo persiste gli elementi presenti in questa lista
}

const rootReducer = ReducerFactory.combine();
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const ReduxStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }).concat(loggerMiddleware, thunk),
})

export const useDispatch = (): ThunkDispatch<RootState, any, AnyAction> => ReduxStore.dispatch;