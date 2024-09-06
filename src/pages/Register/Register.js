import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  async function RegisterUser(e) {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const res = await axios.post("https://xrlearn.onrender.com/api/user/register", {
        name,
        email,
        password
      });
      console.log(res);
      if (res.status === 201 && res.data.user) {
        alert('Successfully Registered');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      setError('Registration failed. Please check your details and try again.');
    }
  }

  useEffect(() => {
    // MutationObserver to replace deprecated DOM events
    const targetNode = document.querySelector('.register-form');
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
    <div className='register-wrapper'>
      <div className='register-body'>
        <h1>Register on XRLearn</h1>
        <div className='register-form'>
          <form onSubmit={RegisterUser}>
            <input
              className='register__input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
            />
            <br />
            <input
              className='register__input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <br />
            <input
              className='register__input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <br />
            <button type="submit" className="register-btn">Register</button>
            {error && <p className="error-message">{error}</p>}
            <h3>Already Registered? <Link to='/'>Click Here</Link> to Login</h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
