import { createSlice } from "@reduxjs/toolkit";

// Init all values of state
const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    signin: false,
    accessToken: null
};

// Redux slice that represents the user state. Contains initial user state, actions, reducers to update the state with dispatch actions.
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            // { type: "user/setAcessToken", payload: string}
            state.accessToken = action.payload;
        },
        signIn: (state, action) => {
            // { type: "user/signIn", payload: {}}
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.signin = true;
        },
        signOut: (state) => {
            // { type: "user/signOut"}
            state.id = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
            state.signin = false;
            state.accessToken = null;
        },
        editUser: (state, action) => {
            // { type: "user/editUser", payload: {}}
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    },
});

export const { setAccessToken, signIn, signOut, editUser } = userSlice.actions;

export default userSlice;