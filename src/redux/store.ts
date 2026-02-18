import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserInfo } from "../type";

export type AuthState = {
  userInfo?: UserInfo;
};

const initialState: AuthState = {
  userInfo: undefined
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo | undefined>) => {
      state.userInfo = action.payload;
    }
  }
});

export const { setUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;
