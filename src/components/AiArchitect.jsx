import React from 'react';

export const AiArchitect = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ Meet Your Personal Architect ]</h2>
      <p className="section-subtitle">
        Inspired by the ultimate leveling system, our AI doesn't just track—it guides. It's the core of Arise, built to ensure you never face a plateau alone.
      </p>
      <div className="ai-cards-grid">
        <div className="ai-card">
          <span className="ai-card-emoji">🧠</span>
          <h3>Learn & Adapt</h3>
          <p>Our AI learns your unique strengths and weaknesses to create a truly personalized path forward.</p>
        </div>
        <div className="ai-card">
          <span className="ai-card-emoji">📜</span>
          <h3>Crafted Challenges</h3>
          <p>Receive daily and weekly 'quests' that are challenging but achievable, designed to build momentum.</p>
        </div>
        <div className="ai-card">
          <span className="ai-card-emoji">🚨</span>
          <h3>Stay Ahead</h3>
          <p>Arise anticipates potential setbacks and provides strategies to keep you on track towards your goals.</p>
        </div>
      </div>
    </section>
  );
};