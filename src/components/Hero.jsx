import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content fade-in">
        <h1 className="hero-title">探索中國旅居之美</h1>
        <p className="hero-subtitle">精選經濟實惠的慢活目的地，開啟您的數位游牧之旅</p>
        <button className="hero-btn">了解更多</button>
      </div>
    </header>
  );
};

export default Hero;
