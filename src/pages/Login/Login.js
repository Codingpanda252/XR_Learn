import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  async function LoginUser(e) {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const res = await axios.post("https://xrlearn.onrender.com/api/user/login", {
        email,
        password
      });
      console.log(res);
      if (res.status === 200 && res.data.user && res.data.token) {
        alert("Successfully Logged In");
        dispatch({
          type: 'LOGIN',
          payload: {
            accessToken: res.data.token,
            name: res.data.user.name,
          },
        });
        localStorage.setItem('User', JSON.stringify({
          accessToken: res.data.token,
          name: res.data.user.name,
        }));
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      setError('Invalid login credentials. Please try again.');
    }
  }

  useEffect(() => {
    // MutationObserver to replace deprecated DOM events
    const targetNode = document.querySelector('.login-form');
    const config = { childList: true, subtree: true };

    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('DOM subtree changed.');
        }
      }
    };

    const observer = new MutationObserver(callback);
    if (targetNode) observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='login-wrapper'>
      <div className='login-body'>
        <h1>Login To XRLearn</h1>
        <div className='login-form'>
          <form onSubmit={LoginUser}>
            <input
              className='login__input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <br />
            <input
              className='login__input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <br />
            <button type="submit" className="login__btn">Login</button>
            {error && <p className="error-message">{error}</p>}
            <h3>Not Registered Yet? <Link to='/signup'>Click Here</Link> to Register</h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
