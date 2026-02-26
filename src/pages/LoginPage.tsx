import { Box, Button, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import { isEmail } from "../utils/isEmail";
// import { HomePage } from "../pages/HomePage";
import { useDispatch } from "react-redux";
// import HomePage from "./HomePage";
import { useNavigate } from "react-router";
import { authActions } from "../store/authSlice";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!isEmail(email)) {
      alert("Email tidak valid");
      return;
    }
    try {

      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        alert("Login gagal");
        return;
      }

      const setUserInfo = async () => {
        const getUserInfo = await fetch('http://localhost:5173/api/auth/me', {
          method: 'GET',
          headers: {
            "content-type": "application/json",
          },
        })
        const data = await getUserInfo.json();
        dispatch(authActions.setUserInfo(data.user));
        // navigate("/")
      }

      setUserInfo();
      setIsLoggedIn(true);
    }
    catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Login Berhasil");
      navigate("/")
    }
  }, [isLoggedIn])

  return (
    <>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mt: 5 }}>
        <FormControl component="form" sx={{ maxWidth: 'sm' }}>
          <h1>Login Page</h1>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <Button variant="contained" type="button" onClick={handleLogin}>Login</Button>
        </FormControl>
      </Box>
    </>
  )
}


export default LoginPage;


