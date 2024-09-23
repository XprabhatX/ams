import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";

const rootReducers = combineReducers({
    'auth': authSlice,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.REACT_APP_NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export default store;