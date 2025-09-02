import React from 'react';

export const AscensionPath = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ The Path to Mastery ]</h2>
      <p className="section-subtitle">
        Growth isn't a single event; it's a journey. Arise is structured to guide you from your first step to ultimate mastery.
      </p>
      <div className="ascension-path">
        <div className="path-step">
          <div className="rank">FOUNDATION</div>
          <h3>Establish Your Baseline</h3>
          <p>Begin with core daily quests designed for maximum consistency and building initial momentum.</p>
        </div>
        <div className="path-step">
          <div className="rank">MOMENTUM</div>
          <h3>Unlock Your Potential</h3>
          <p>Advance to specialized challenges targeting your specific goals, from fitness to learning new skills.</p>
        </div>
        <div className="path-step">
          <div className="rank">MASTERY</div>
          <h3>Integrate Your Habits</h3>
          <p>Reach a state where your best habits are second nature, fully integrated into your identity.</p>
        </div>
      </div>
    </section>
  );
};