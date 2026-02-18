import { useNavigate, useParams } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

type Post = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  id: string;
  title: string;
  content: string;
  status: string;
  user: {
    name: string;
  };
  userID: string;
};


export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  }
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/post/${id}`);
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return<> 
    
    <div>
      <div>
        <Typography variant="h4" sx={{ fontWeight: 500, maxWidth: "100%" }}>
          {post.title}
        </Typography>
      </div>
      <div><Typography variant="body1" sx={{ fontWeight: 200, maxWidth: "60%" ,display : "inline-block"}}>
          {post.content}
        </Typography></div>
    </div>
    <div>
        <button  onClick={back}>Back</button>
    </div>
  </>;
  
}
