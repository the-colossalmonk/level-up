import React from 'react';
import SystemCore from '../assets/SystemCore.svg';

export const Header = ({ onRegisterClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#" className="logo">
          <img src={SystemCore} alt="System Core Logo" />
          <span>Project: Level Up</span>
        </a>
        <button onClick={onRegisterClick} className="header-cta">
          Join the Waitlist
        </button>
      </div>
    </header>
  );
};