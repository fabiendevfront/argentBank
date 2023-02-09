import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

// Configuration for the persistence of the user slice state
const persistConfig = {
    key: "user",
    storage: sessionStorage
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

// Configure the store with the persisted user slice and the thunk middleware
const store = configureStore({
    reducer: {
        user: persistedReducer
    },
    // To manage non-serializable actions like asynchronous functions
    middleware: [thunk]
});

export const persistor = persistStore(store);

export default store;