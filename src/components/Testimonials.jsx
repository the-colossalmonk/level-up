import React from 'react';

const testimonialsData = [
    {
    quote: "Saw a preview of the quest system and immediately understood the vision. This is the first app that feels like it's for us. I'm on the waitlist. Can't wait for my 'Awakening'.",
    author: "— Kai, Future Hunter"
  },
  {
    quote: "The Solo Leveling theme is perfect, but the actual app logic the creator showed me is what sold it. This is a serious tool for growth. Eagerly awaiting my invite to the guild.",
    author: "— Lena, Pre-Launch Insider"
  },
  {
    quote: "Finally, a dev that gets it. The concept of leveling up real-life stats by completing quests is genius. I signed up for the waitlist the moment I saw it. Ready for my job change.",
    author: "— Marcus, Waitlist Member"
  },
  {
    quote: "This is the system I've been waiting for. The blend of a theme I love with a tool I genuinely need is incredible. Counting down the days until launch.",
    author: "— Chloe, Aspiring Hunter"
  }
];

export const Testimonials = () => {
  return (
    <section className="section">
      <h2 className="section-title">[ Dispatches from the First Hunters ]</h2>
      <p className="section-subtitle">The waitlist is growing. Here’s what aspiring Hunters are saying.</p>
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