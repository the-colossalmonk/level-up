import React from 'react';
import ShadowArmyIcon from '../assets/icons/ShadowArmy.svg';

export const ShadowArmySection = () => {
  return (
    <section className="section shadow-section">
      <div className="shadow-content">
        <img src={ShadowArmyIcon} alt="Shadow Army Icon" className="shadow-icon" />
        <h2 className="section-title">Your Shadow Army Awaits</h2>
        <p className="section-subtitle">
          In the Level Up system, every mastered habit becomes an automated skill—a 'shadow soldier' in your personal army of discipline. Forge a force that works for you, even when you're not thinking about it.
        </p>
      </div>
    </section>
  );
};