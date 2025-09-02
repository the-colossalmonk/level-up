import React from 'react';
import SwordIcon from '../assets/icons/Sword.svg';
import ShieldIcon from '../assets/icons/Shield.svg';
import StatsIcon from '../assets/icons/Stats.svg';

export const Mandate = () => {
  return (
    <section className="section">
      <div className="mandate-grid">
        <div className="mandate-text">
          <h2 className="section-title" style={{textAlign: 'left'}}>[ The Hunter's Mandate ]</h2>
          <p className="section-subtitle" style={{textAlign: 'left', margin: '0 0 20px 0'}}>
            This isn't just an app. It's a new protocol for growth.
          </p>
          <p className="mandate-body">
            Standard trackers are a logbook. The Level Up system is your guide. It's an intelligent partner designed to issue personalized 'quests,' track your experience points, and push you beyond your limits.
          </p>
        </div>
        <div className="mandate-features">
          <div className="feature-item">
            <img src={SwordIcon} alt="Sword" />
            <div>
              <h3>Conquer Daily Quests</h3>
              <p>Engage with active, AI-generated challenges that push you forward.</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={ShieldIcon} alt="Shield" />
            <div>
              <h3>Build Unbreakable Streaks</h3>
              <p>Develop defensive consistency that protects your hard-won progress.</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={StatsIcon} alt="Stats" />
            <div>
              <h3>Level Up Real-Life Stats</h3>
              <p>Watch your tangible attributes like Discipline and Focus grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};