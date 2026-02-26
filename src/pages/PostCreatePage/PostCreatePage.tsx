import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import { useCreatePost } from "../../hooks/useCreatePost";
import { useNavigate } from "react-router";


export function PostCreatePage() {
    const { title, content, status, createdAt, updatedAt, isLoading, setTitle, setContent, setStatus, setCreatedAt, setUpdatedAt, createPost } = useCreatePost();

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };


    return (<>
        <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" >
            <h1>    Create Post</h1>
            <Grid>
                <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Grid>
            <Grid>
                <TextField label="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            </Grid>
            <Grid>
                <Select defaultValue="draft" value={status} onChange={(e) => setStatus(e.target.value)} fullWidth>
                    <MenuItem value="draft" key="draft">Draft</MenuItem>
                    <MenuItem value="published" key="published">Published</MenuItem>
                </Select>
                <input type="hidden" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
                <input type="hidden" value={updatedAt} onChange={(e) => setUpdatedAt(e.target.value)} />
            </Grid>

            <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center" >
                <Button variant="contained" onClick={createPost} disabled={isLoading} >
                    {isLoading ? "Creating..." : "Create Post"}
                </Button>
                <Button variant="contained" onClick={goBack}>
                    Back
                </Button>
            </Grid>
        </Grid>
    </>)
}
