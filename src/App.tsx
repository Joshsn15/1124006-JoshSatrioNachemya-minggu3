import './App.css'
import { useState } from 'react';
import { isEmail } from './utils/isEmail';
// import { PostList } from './PostList';
// import { LearningHooks } from './LearningHooks'

 


function App() {
  // return <LearningHooks />;

  
  const [email, setEmail] = useState(''); // useState adalah penyimpan kondisi nilai khusus untuk di 1 komponen
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const Login = async () => {
    if (!isEmail(email)) {
      alert("Email tidak valid");
      return;
    } 
  
    const response = await fetch('http://localhost:5173/api/auth/login', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    });
    if (response.status != 200) {
      alert("Login gagal");
      return;
    }
    
    setIsLoggedIn(true);
  }

  const Logout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  }

  if (isLoggedIn) {
    return <div>
      <div>
        <div> hello , {email}</div>
        {/* <PostList /> */}
      </div>
      <div>
        <button onClick={Logout}>Logout</button>
        
      </div>
    </div>
  }


  return (
    <><div>
      <h4>Login</h4>

        <div>
          <p>Email:</p>
          <input type="text" name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          {/* // e adalah event yang terjadi pada input */}
        </div>
        <div>
          <p>Password:</p>
          <input type="password" name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={Login}>Login</button>
    </div><div>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div></>
  )
}



export default App
