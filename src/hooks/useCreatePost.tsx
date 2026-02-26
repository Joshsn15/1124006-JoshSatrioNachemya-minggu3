import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { postActions } from "../redux/postSlice";

export function useCreatePost() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [status, setStatus] = useState<string>("draft");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [createdAt, setCreatedAt] = useState<string>("");
    const [updatedAt, setUpdatedAt] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createPost = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ title, content, status , createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()})
            });

            if (response.ok) {
                const data = await response.json();
                dispatch(postActions.setPost(data));
                alert("Post created successfully");
                navigate('/post');
            }
        } catch (error) {
            console.error("Error creating post:", error);
        } finally {
            setIsLoading(false);
        }
    }, [title, content, status, dispatch, navigate]); 

    return { // isinya hrs ad state, setter & action
    
        title,
        content,
        status,
        isLoading,
        createdAt,
        updatedAt,

        setTitle,
        setContent,
        setStatus,
        setCreatedAt,
        setUpdatedAt,

        createPost,
    };
}