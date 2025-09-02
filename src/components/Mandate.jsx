import React from 'react';
import SwordIcon from '../assets/icons/Sword.svg';
import ShieldIcon from '../assets/icons/Shield.svg';
import StatsIcon from '../assets/icons/Stats.svg';

export const Mandate = () => {
  return (
    <section className="section">
      <div className="mandate-grid">
        <div className="mandate-text">
          <h2 className="section-title" style={{textAlign: 'left'}}>Beyond the Checklist</h2>
          <p className="section-subtitle" style={{textAlign: 'left', margin: '0 0 20px 0'}}>
            Tired of habit trackers that feel like a chore? We're building something different—a partner in your growth, not just a passive logbook.
          </p>
          <p className="mandate-body">
            Arise is an intelligent system designed to learn your patterns, craft personalized challenges, and turn your ambitions into achievements. It's time for a tool that works as hard as you do.
          </p>
        </div>
        <div className="mandate-features">
          <div className="feature-item">
            <img src={SwordIcon} alt="Sword" />
            <div>
              <h3>Intelligent Quests</h3>
              <p>Personalized challenges created by our AI to target your goals.</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={ShieldIcon} alt="Shield" />
            <div>
              <h3>Build Momentum</h3>
              <p>Track your streaks and build unstoppable daily consistency.</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={StatsIcon} alt="Stats" />
            <div>
              <h3>Visualize Your Growth</h3>
              <p>Watch your real-life stats improve with every quest completed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};