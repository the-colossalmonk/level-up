import React from 'react';
import ShadowArmyIcon from '../assets/icons/ShadowArmy.svg';

export const ShadowArmySection = () => {
  return (
    <section className="section shadow-section">
      <div className="shadow-content">
        <img src={ShadowArmyIcon} alt="Shadow Army Icon" className="shadow-icon" />
        <h2 className="section-title">Your Shadow Army Awaits</h2>
        <p className="section-subtitle">
          In our System, your mastered habits don't just disappear. They become your 'Shadow Soldiers'—automated skills that work for you tirelessly in the background. Build an army of discipline, and become unstoppable.
        </p>
      </div>
    </section>
  );
};