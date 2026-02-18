import { FormControl } from "@mui/material";
import { useState } from "react";
import { isEmail } from "../utils/isEmail";
// import { HomePage } from "../pages/HomePage";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/store";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const Login = async () => {

    try {
      if (!isEmail(email)) {
        alert("Email tidak valid");
        return;
      }

      const response = await fetch('https://forum.hansyulian.space/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        alert("Login gagal");
        return;
      }
      const data = await response.json();

      const userInfo = data.user; 

      dispatch(setUserInfo(userInfo));
      setIsLoggedIn(true);

    } catch (err) {
      console.error(err);
      alert("Network / CORS error");
    }
  };



  if (isLoggedIn) {
    console.log("Login Berhasil");
    return <div><h1>loginBerhasil</h1></div>
    // return <HomePage />
  }

  else {
    return (
      <>
        <div>
          <h1>Login Page</h1>
        </div>
        <FormControl>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={Login}>Login</button>
        </FormControl>
      </>
    )
  }
}


export default LoginPage;
