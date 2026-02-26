import { useState, useMemo } from "react";
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";
import { Button, Select, Card, CardContent, CardActions, MenuItem } from "@mui/material";
import { usePosts } from "../../hooks/usePosts";
import { useDispatch } from "react-redux";
import { postActions } from "../../redux/postSlice";



export default function PostList() {
    const { posts, setPosts } = usePosts();
    const [sortBy, setSortBy] = useState<string>("title");
    const [sortOrder, setSortOrder] = useState<boolean>(true); // true = ASC, false = DESC
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const goToPost = (id: string) => {
        navigate(`/post/${id}`);
    };

    const goBack = () => {
        navigate(-1);
    };

    const sortedPost = useMemo(() => {
        if (!posts.length) return [];
        const result = [...posts];

        return result.sort((a, b) => {
            let comparison = 0;

            switch (sortBy) {
                case "title":
                    comparison = a.title.localeCompare(b.title);
                    break;
                case "content":
                    comparison = a.content.localeCompare(b.content);
                    break;
                case "status":
                    comparison = a.status.localeCompare(b.status);
                    break;
                case "user":
                    comparison = a.user.name.localeCompare(b.user.name);
                    break;
                case "createdAt":
                    comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                    break;
                default:
                    comparison = 0;
            }

            return sortOrder ? comparison : -comparison;
        });
    }, [posts, sortBy, sortOrder]);

    const fetchPosts = async () => {
        const response = await fetch('api/post');
        if (response.status === 200) {
            const data = await response.json();
            setPosts(data.records);
            dispatch(postActions.setPost(data.records));
        }
    };
    fetchPosts();


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', margin: '20px' }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <MenuItem key="title" value="title">Title</MenuItem>
                    <MenuItem key="content" value="content">Content</MenuItem>
                    <MenuItem key="status" value="status">Status</MenuItem>
                    <MenuItem key="user" value="user">User</MenuItem>
                </Select>

                <Button variant="contained" onClick={() => setSortOrder(!sortOrder)}>
                    {sortOrder ? "Sort: Ascending" : "Sort: Descending"}
                </Button>

                <Button variant="contained" onClick={goBack}>
                    Back
                </Button>

                <Button variant="contained" onClick={() => navigate("/post/create")}>
                    Create Post
                </Button>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    padding: '0 24px 24px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {sortedPost.map((post) => (
                    <Card key={post.id} variant="outlined" sx={{ borderRadius: 3, boxShadow: 2 }}>
                        <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Avatar alt={post.user.name} src="/static/images/avatar/1.jpg" />
                                <Typography variant="subtitle2" color="text.secondary">
                                    {post.user.name}
                                </Typography>
                            </div>

                            <Divider sx={{ mb: 1 }} />

                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color="text.primary"
                                sx={{ mb: 0.5 }}
                                noWrap
                            >
                                {post.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    mb: 1,
                                }}
                            >
                                {post.content}
                            </Typography>

                            <Typography variant="caption" color="text.disabled" display="block">
                                Status: {post.status}
                            </Typography>
                            <Typography variant="caption" color="text.disabled" display="block">
                                {post.createdAt}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small" variant="outlined" onClick={() => goToPost(post.id)}>
                                Detail
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}