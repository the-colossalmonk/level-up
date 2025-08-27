import React from 'react';

export const AiArchitect = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ The AI Architect ]</h2>
      <p className="section-subtitle">
        Just as 'The System' gave Sung Jinwoo the precise quests needed to evolve, our AI does the same for your life. It is your personal architect of growth.
      </p>
      <div className="ai-cards-grid">
        <div className="ai-card">
          <span className="ai-card-emoji">🧠</span>
          <h3>Weakness Analysis</h3>
          <p>The AI identifies where you falter and generates 'Penalty Quests' to fortify those exact areas, turning weaknesses into strengths.</p>
        </div>
        <div className="ai-card">
          <span className="ai-card-emoji">📜</span>
          <h3>Personalized Quests</h3>
          <p>Receive daily and weekly quests tailored to your ultimate goals. No generic advice—only a direct, optimized path to your best self.</p>
        </div>
        <div className="ai-card">
          <span className="ai-card-emoji">🚨</span>
          <h3>Predictive Alerts</h3>
          <p>The System learns your patterns and warns you of potential failure points before they happen, giving you the chance to overcome them.</p>
        </div>
      </div>
    </section>
  );
};