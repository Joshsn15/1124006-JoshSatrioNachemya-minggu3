import { useCallback, useMemo, useState } from "react";
import type { AsyncDataState, Post } from "../type";

export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [state, setState] = useState<AsyncDataState>('pending');

    const reload = useCallback(async () => {
        const response = await fetch('api/post')
        const data = await response.json()
        setPosts(data)
        setState('fulfilled')

    }, [])


    return useMemo(() => {
        return {
            posts,
            setPosts,
            reload,
            state,
        }


    }, [posts,setPosts, reload, state]) // return hrs sama dengan array yg akan dipakai
                                        // ex : const {posts} = usePosts() -> berarti posts harus ada di array dependency



}