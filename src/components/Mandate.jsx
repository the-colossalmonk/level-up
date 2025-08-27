import React from 'react';
import SwordIcon from '../assets/icons/Sword.svg';
import ShieldIcon from '../assets/icons/Shield.svg';
import StatsIcon from '../assets/icons/Stats.svg';

export const Mandate = () => {
  return (
    <section className="section">
      <div className="mandate-grid">
        <div className="mandate-text">
          <h2 className="section-title" style={{textAlign: 'left'}}>The Hunter's Mandate</h2>
          <p className="section-subtitle" style={{textAlign: 'left', margin: '0 0 20px 0'}}>
            Standard habit trackers merely observe. They are passive spectators. Our System is an active participant in your growth, designed to push you beyond your self-imposed limits.
          </p>
          <p className="mandate-body">
            This isn't about checking boxes. It's about tangible, measurable growth. We provide the structure and the challenge; you provide the will to conquer it.
          </p>
        </div>
        <div className="mandate-features">
          <div className="feature-item">
            <img src={SwordIcon} alt="Sword" />
            <div>
              <h3>Conquer Challenges</h3>
              <p>Engage with active quests that push your boundaries.</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={ShieldIcon} alt="Shield" />
            <div>
              <h3>Build Resilience</h3>
              <p>Develop defensive habits that protect your progress.</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={StatsIcon} alt="Stats" />
            <div>
              <h3>Level Up Your Stats</h3>
              <p>Watch your real-world attributes grow with every success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};