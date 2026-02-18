import { createSlice } from "@reduxjs/toolkit";
import type { UserInfo } from "../type";

export type AuthState = {
    userInfo?: UserInfo,
    username: string,
    email: string,
    token: string,
    isLoggedIn: boolean,

}

const initialState: AuthState = {
    userInfo: undefined,
    username: "",
    email: "",
    token: "",
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
