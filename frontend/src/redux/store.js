import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

const persistConfig = {
    key: "user",
    storage: sessionStorage
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

const store = configureStore({
    reducer: {
        user: persistedReducer
    },
    // To manage non-serializable actions like asynchronous functions
    middleware: [thunk]
});

export const persistor = persistStore(store);

export default store;