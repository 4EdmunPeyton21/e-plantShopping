import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay-content">
        <div className="left-panel">
          <h1>
            Welcome To<br/>The Verdant Nook
          </h1>
          <p className="subtitle">
            Your online destination for beautiful, healthy houseplants.
          </p>
          <Link to="/products" className="btn get-started-btn">Get Started</Link>
        </div>
        <div className="right-panel">
          <p>
            Founded in 2024, The Verdant Nook is born from a passion for bringing nature indoors.
        We believe that plants do more than just beautify a space; they bring life, tranquility,
        and a connection to the natural world. Our mission is to provide healthy, high-quality
        houseplants to enthusiasts and beginners alike, making it easy for everyone to create
        their own green sanctuary.
          </p>
          <p>
            At The Verdant Nook, we carefully select each plant to ensure it meets our standards for
        health and vitality. Our team is dedicated to providing exceptional customer service,
        offering expert advice, and helping you find the perfect plants for your home or office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;