import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../type";


export type PostState = {
    post: Post,
}

const initialState: PostState = { // default state saat awal 
    post: {
        id: "",
        title: "",
        content: "",
        status: "",
        createdAt: "",
        updatedAt: "",
        userId: "",
        user: {
            name: "",
        }
    },
}

export const postSlice = createSlice({
    name : "post",
    initialState,

    reducers : {
        setPost: (state, action: PayloadAction<Post>) => {
            state.post = action.payload;
        }
    }
})

// export const buat action, jadi bisa dipanggil di component lain, contoh: dispatch(postActions.setPosts(data.records))
export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;