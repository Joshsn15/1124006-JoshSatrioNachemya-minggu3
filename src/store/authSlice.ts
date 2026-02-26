import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserInfo } from "../type";

export type AuthState = {
    userInfo?: UserInfo,
    isLoading : boolean,

}

const initialState: AuthState = { // default state saat awal 
    userInfo: undefined,
    isLoading : false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: { // reducers itu function yang akan mengubah state, contoh: setUserInfo akan mengubah state userInfo
        setUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state.userInfo = action.payload;
            state.isLoading = false;
        },
    }
})

// export const buat action, jadi bisa dipanggil di component lain, contoh: dispatch(authActions.setUserInfo(data.user))
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
