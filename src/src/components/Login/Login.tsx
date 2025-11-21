import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';


interface DemoCredentials {
  userName: string;
  password: string;
}

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const DEMO_CREDENTIALS: DemoCredentials = {
    userName: 'user123',
    password: 'password123'
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userName === DEMO_CREDENTIALS.userName && password === DEMO_CREDENTIALS.password) {
      dispatch(login({ username: userName }));
      navigate("/onboarding/step1Profile")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder="Enter Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type='text'
          placeholder="Enter password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
