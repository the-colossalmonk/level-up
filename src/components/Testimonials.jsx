import React from 'react';

export const Testimonials = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ Words from the First Hunters ]</h2>
      <p className="section-subtitle">Dispatches from those who have already answered the call.</p>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="testimonial-quote">"I've tried every tracker out there. This is the first one that feels like it's actively working *with* me. The AI quests are a game-changer."</p>
          <span className="testimonial-author">- Hunter Alex, Beta Tester</span>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-quote">"The 'Shadow Army' concept shifted my entire perspective. Seeing my habits as allies I command has made me incredibly consistent."</p>
          <span className="testimonial-author">- Hunter Sarah, Alpha User</span>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-quote">"It's not just an app, it's a new mindset. I feel like I'm the main character of my own growth story. Can't wait for the full release."</p>
          <span className="testimonial-author">- Hunter Jin, Early Access</span>
        </div>
      </div>
    </section>
  );
};