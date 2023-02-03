import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
// import storage from 'redux-persist/lib/storage'
// import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
// import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store;

// const persistConfig = {
//   key: 'user',
//   storage
// };

// const reducers = combineReducers({ user: userReducer });
// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk]
// });

// export default store;