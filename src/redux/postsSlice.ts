import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../type";


export type PostsState = {
    posts: Post[],
}

const initialState: PostsState = { // default state saat awal 
    posts: [],
}

export const postSlice = createSlice({
    name : "post",
    initialState,

    reducers : {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        }
    }
})

// export const buat action, jadi bisa dipanggil di component lain, contoh: dispatch(postActions.setPosts(data.records))
export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;