import React from 'react'
import './Footer.css'
import {AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-details'>
        <div className='footer-about'>
          <h1>ABOUT</h1>
          <p>XRLearn is AI powered tool. It offers a user-friendly interface, personalized reading exercises, and innovative tools to enhance reading and comprehension skills. XRLearn aims to make learning enjoyable and accessible to everyone.
            </p>
        </div>
        <div className='footer-links'>
          <a className='link' target='_blank' rel='noreferrer' href='https://github.com/Codingpanda252/XR_Learn/'><AiFillGithub /></a>
        </div>
      </div>
      <hr />
      <div className='footer-copyright'>
        <h3>Copyright @ {new Date().getFullYear()} All Rights Reserved by XRLearn</h3>
      </div>
    </div>
  )
}

export default Footer