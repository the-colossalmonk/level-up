import React from 'react';

export const AscensionPath = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ The Path to S-Rank ]</h2>
      <p className="section-subtitle">
        Growth is a journey through the ranks. Here’s how the System guides your ascension from Hunter to Monarch.
      </p>
      <div className="ascension-path">
        <div className="path-step">
          <div className="rank">E-RANK</div>
          <h3>The Awakening</h3>
          <p>Establish your foundation with core Daily Quests designed for maximum consistency.</p>
        </div>
        <div className="path-step">
          <div className="rank">C-RANK</div>
          <h3>The Job Change</h3>
          <p>Unlock specialized quests that target your primary goals, from fitness to learning new skills.</p>
        </div>
        <div className="path-step">
          <div className="rank">S-RANK</div>
          <h3>The Monarch</h3>
          <p>Achieve a state where your most powerful habits are instinct, fully integrated into your identity.</p>
        </div>
      </div>
    </section>
  );
};