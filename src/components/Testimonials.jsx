import React from 'react';

const testimonialsData = [
  {
    quote: "After a chat with the creator, I'm convinced this isn't just another app. The vision for the AI Architect is unlike anything I've seen. I've been waiting for a tool that truly understands the growth mindset. Consider me first in line.",
    author: "— Kai, Tech Enthusiast"
  },
  {
    quote: "The way they've integrated the 'Solo Leveling' theme is brilliant. It's not just a gimmick; the core mechanics of the 'System' are actually designed to make you level up in real life. The launch can't come soon enough.",
    author: "— Lena, Product Designer"
  },
  {
    quote: "I was skeptical at first, but hearing the architectural plan for the AI changed my mind. It's designed to be a partner, not just a passive tracker. This is the exact motivation I need.",
    author: "— Marcus, Fitness Coach"
  },
  {
    quote: "Finally, someone is building what we've all been thinking about. A habit tracker that adapts and pushes you. I've already cleared a spot on my homescreen for it.",
    author: "— Chloe, University Student"
  },
  {
    quote: "The passion behind this project is contagious. They're solving a real problem with a creative and powerful solution. I'm excited to see my personal 'Shadow Army' of habits come to life.",
    author: "— David, Software Engineer"
  }
];

export const Testimonials = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ Dispatches from the Front Line ]</h2>
      <p className="section-subtitle">Early intel from hunters who have conferred with the System's Architect.</p>
      <div className="testimonials-scroller">
        <div className="testimonials-track">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card" key={`a-${index}`}>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <span className="testimonial-author">{testimonial.author}</span>
            </div>
          ))}
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card" key={`b-${index}`}>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <span className="testimonial-author">{testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <span className="testimonial-author">{testimonial.author}</span>
          </div>
        ))}
      </div> */}
    </section>
  );
};