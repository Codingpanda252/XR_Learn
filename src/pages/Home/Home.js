import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/dashboard');
  };

  return (
    <div className='home-container'>
      <div className='hero-section'>
        <h1>Welcome to XRLearn</h1>
        <p>Empowering you with AI-driven tools to enhance your learning experience. Explore our innovative features and start your journey towards better comprehension and learning efficiency.</p>
        <button className='hero-button' onClick={handleStartLearning}>Start Learning</button>
      </div>
    </div>
  );
};

export default Home;
