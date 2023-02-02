import { createSlice } from "@reduxjs/toolkit";

const accessToken = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null;

const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    signin: false,
    accessToken,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            // { type: "user/signin", payload: {}}
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.signin = true;
            state.accessToken = sessionStorage.getItem("token");
        },
        signOut: (state) => {
            // { type: "user/signout", payload: {}}
            state.id = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
            state.signin = false;
            state.accessToken = sessionStorage.removeItem("token");
        },
        editUser: (state, action) => {
            // { type: "user/edit", payload: {}}
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    },
});

export const { signIn, signOut, editUser } = userSlice.actions;

export default userSlice;