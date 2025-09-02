import React from 'react';

const testimonialsData = [
  {
    quote: "I saw a private demo of the AI quest system and was blown away. This is the first habit app that seems to actually *get* the psychology of motivation. I'm on the waitlist and checking my email daily.",
    author: "— Kai, Early Look"
  },
  {
    quote: "The 'Solo Leveling' theme is what drew me in, but the vision the team shared is what made me stay. They're building a serious tool for personal growth. Can't wait for launch day.",
    author: "— Lena, Product Preview"
  },
  {
    quote: "Finally, a dev team that understands that a list of checkboxes isn't enough. The concept of an adaptive system that grows with you is exactly what's been missing. The launch can't come soon enough.",
    author: "— Marcus, Pre-Launch Insider"
  },
  {
    quote: "Signed up for the waitlist the second I saw the landing page. The idea of turning my goals into a real-life leveling journey is just... perfect. Eagerly awaiting my invitation.",
    author: "— Chloe, Future Hunter"
  }
];

export const Testimonials = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ Hunters Are Gathering ]</h2>
      <p className="section-subtitle">The word is out. Here’s what people are saying ahead of the launch.</p>
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
    </section>
  );
};