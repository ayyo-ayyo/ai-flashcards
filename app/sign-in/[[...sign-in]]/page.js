import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import {SignIn} from "@clerk/nextjs"
import Link from "next/link";
export default function SignInPage() {
    return (
       <>
       <AppBar position="static" sx={{backgroundColor:"3f51b5"}}>
           <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   AI flashcards
               </Typography>
               <Button color="inherit">
                <Link href="/sign-in">
                    Login
                </Link>
                </Button>
           </Toolbar>
       </AppBar>
       <Box>
            <Typography variant="h4" component="h1" gutterBottom> Sign In</Typography>

            <SignIn />

        </Box>
        </>
    )
}