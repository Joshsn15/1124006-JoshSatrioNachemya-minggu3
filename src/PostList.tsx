import { useEffect, useState, useCallback, useMemo } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";


type user = {
    name: string;
}
type Post = {
    id: string;
    title: string;
    content: string;
    status: string;
    user: user;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

export default function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [sortBy, setSortBy] = useState<string>("title"); // Default sort by title
    const [sortOrder, setSortOrder] = useState<boolean>(true); // true = ASC, false = DESC
    const navigate = useNavigate();
    const goToPost = (id: string) => {
        navigate(`/post/${id}`);
    }


    // useMemo akan otomatis jalan SETIAP KALI posts, sortBy, atau sortOrder berubah
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

            // Kalau sortOrder false (DESC), kita balik hasilnya
            return sortOrder ? comparison : -comparison;
        });
    }, [posts, sortBy, sortOrder]);

    const reloadPosts = useCallback(async () => {
        const response = await fetch('http://localhost:5173/api/post');
        if (response.status === 200) {
            const data = await response.json();
            setPosts(data.records);
        }
    }, []);

    useEffect(() => { reloadPosts(); }, [reloadPosts]);


    return (
        <>
            <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>

                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="title">Title</option>
                    <option value="content">Content</option>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                </select>

                <button onClick={() => setSortOrder(!sortOrder)} >
                    {sortOrder ? "Sort: Ascending" : "Sort: Descending"}
                </button>
            </div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {sortedPost.map((post) => (
                    <ListItem alignItems="flex-start" key={post.id}>
                        <ListItemAvatar>
                            <Avatar alt={post.user.name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>

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

                                        // sx={{ display: 'inline', maxWidth: '400px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                                        display= "inline"
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
                            <button onClick={() => goToPost(post.id)}  >detail</button>
                            <Divider variant="inset" />
                        </div>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
