import React from 'react';
import './Hero.css';
import logo from './img/logo.jpg';

export default function NavBar() {
    return (
        <div className="hero-container">
        <h1 className="hero-text">INCEPTION</h1>
        <div className="hero-img">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    );
}