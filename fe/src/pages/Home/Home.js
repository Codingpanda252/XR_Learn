import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/dashboard');
  };

  const handleHoloLearnVR = () => {
    window.open('https://www.spatial.io/s/Edumos-XR-66d37a6d7e72b1acb80c9102', '_blank');
  };

  const handleHoloLearnAR = () => {
    window.open('https://hololearn.netlify.app/arlearning', '_blank');
  };

  return (
    <div className='home-container'>
      <div className='hero-section'>
        <h1>Welcome to XRLearn</h1>
        <p>Empowering you with AI-driven tools to enhance your learning experience. Explore our innovative features and start your journey towards better comprehension and learning efficiency.</p>
        <div className="button-container">
          <button className='hero-button' onClick={handleStartLearning}>Start Learning</button>
          <button className='hero-button hololearn-button-vr' onClick={handleHoloLearnVR}>Enter HoloLearn VR</button>
          <button className='hero-button hololearn-button-ar' onClick={handleHoloLearnAR}>Enter HoloLearn AR</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
