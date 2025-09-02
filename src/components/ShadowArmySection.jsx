import React from 'react';
import ShadowArmyIcon from '../assets/icons/ShadowArmy.svg';

export const ShadowArmySection = () => {
  return (
    <section className="section shadow-section">
      <div className="shadow-content">
        <img src={ShadowArmyIcon} alt="Shadow Army Icon" className="shadow-icon" />
        <h2 className="section-title">Forge Your Automated Self</h2>
        <p className="section-subtitle">
          Every habit you master with Arise becomes an automated part of your life—a 'shadow soldier' working for you. Build an army of discipline that operates on instinct, freeing your focus for the next big challenge.
        </p>
      </div>
    </section>
  );
};