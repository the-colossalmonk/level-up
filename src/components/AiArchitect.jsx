import React from 'react';

export const AiArchitect = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ The AI Architect ]</h2>
      <p className="section-subtitle">
        Our AI is the core of the System. It learns your unique profile to assign the exact challenges you need to evolve—no guesswork, just optimized growth.
      </p>
      <div className="ai-cards-grid">
        <div className="ai-card">
          <span className="ai-card-emoji">🧠</span>
          <h3>Adaptive Learning</h3>
          <p>The System analyzes your patterns to find your weaknesses and assign quests to turn them into strengths.</p>
        </div>
        <div className="ai-card">
          <span className="ai-card-emoji">📜</span>
          <h3>Personalized Quests</h3>
          <p>Receive daily and weekly challenges tailored to your specific ambitions, not generic to-do lists.</p>
        </div>
        <div className="ai-card">
          <span className="ai-card-emoji">🚨</span>
          <h3>Strategic Alerts</h3>
          <p>Anticipate plateaus and setbacks with intelligent alerts designed to keep your momentum going.</p>
        </div>
      </div>
    </section>
  );
};