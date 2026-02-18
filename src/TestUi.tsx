import { Delete } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";


export function TestUi() {
    return <> <Box>
        <Button variant="contained" color="primary">
            Test UI Button
        </Button>

        <IconButton aria-label="delete" size="large">
            <Delete fontSize="inherit" />
            test
        </IconButton>
        
        <Button variant="outlined" color="secondary">
            Another Button
        </Button>
    </Box>
    <br>
    </br>
    
    
    
    </>

    // return <h1>tes</h1>
}