import { useNavigate, useParams } from "react-router";
// import "./App.css";
import { useEffect, useState } from "react";

import { Avatar, List, ListItemText, Typography } from "@mui/material";

import type { Post } from "../../type";


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

  return <>


    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
      <button onClick={back}>Back</button>
    </div>
    <div>
      <div>
        <List sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, marginBottom: 2 }}>
          <Avatar alt={post.user.name} src={'/static/images/avatar/1.jpg'} />
          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>

            <ListItemText
              sx={{ fontWeight: 'bold', color: 'primary.main' }}
              primary={
                <Typography
                  sx={{ display: 'block', maxWidth: '400px', fontWeight: 'bold' }}
                  component="span"
                  variant="h6"
                  color="text.primary"
                >
                  {post.title}
                </Typography>
              }

              secondary={
                <Typography

                  display="inline"
                  component="span"
                  variant="body2"
                  color="text.primary"
                  textOverflow="ellipsis"
                  // maxWidth="60px"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {post.content}

                  <Typography variant="body2" color="text.secondary" >
                    {post.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                    {post.createdAt}
                  </Typography>
                </Typography>

              }
            />

          </div>
          <div>

          </div>
        </List>
      </div>
    </div>
  </>

}
