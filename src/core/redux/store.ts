import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ReducerFactory, RootState } from "./reducers/rootReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import AsyncStorage from "@react-native-async-storage/async-storage";

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// }
// const persistedReducer = persistReducer(persistConfig, ReducerFactory.combine());

// export const ReduxStore = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, thunk),
// })

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  whitelist: ['auth']
}

const rootReducer = ReducerFactory.combine();
const persistedAuthReducer = persistReducer(rootPersistConfig, rootReducer);

export const ReduxStore = configureStore({
  reducer: persistedAuthReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, thunk),
})

export const useDispatch = (): ThunkDispatch<RootState, any, AnyAction> => ReduxStore.dispatch;