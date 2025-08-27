import React from 'react';
import SystemCore from '../assets/SystemCore.svg';

export const Preloader = () => {
  return (
    <div className="preloader">
      <img src={SystemCore} alt="System Core" className="preloader-core" />
      <p className="preloader-text">SYSTEM INITIALIZING...</p>
    </div>
  );
};