import { useNavigate } from "react-router"
import { Button, Container, Typography } from "@mui/material"

export default function HomePage() {
    const navigate = useNavigate();
    function clickToPost(){
        return navigate('/post')
    }

    

    return (
        <>
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to My Blog
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is the Main routes, you can type
            </Typography>
            <ul>
                <li>/learningHooks</li>
                <li>/post</li>
                <li>/post/:id</li>
            </ul>

            <Button variant="contained" onClick={clickToPost}>
                Click here to the Post List
            </Button>
        </Container>

        </>
        
)   
}
