import React from 'react';

export const AscensionPath = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ Your Ascension Path ]</h2>
      <p className="section-subtitle">
        Your journey is a climb through the ranks. Each completed quest grants experience, honing your skills and unlocking greater challenges and rewards.
      </p>
      <div className="ascension-path">
        <div className="path-step">
          <div className="rank">E-RANK</div>
          <h3>The Awakening</h3>
          <p>Begin with foundational 'Daily Quests' to build discipline and consistency. The first step is the most crucial.</p>
        </div>
        <div className="path-step">
          <div className="rank">C-RANK</div>
          <h3>Unlocking Potential</h3>
          <p>As you level up, the AI introduces 'Job-Specific Quests' targeting your core goals, whether in fitness, learning, or career.</p>
        </div>
        <div className="path-step">
          <div className="rank">S-RANK</div>
          <h3>Monarch of Habits</h3>
          <p>Achieve a state of automatic excellence. Your habits are now an integrated part of your identity, a source of immense power.</p>
        </div>
      </div>
    </section>
  );
};