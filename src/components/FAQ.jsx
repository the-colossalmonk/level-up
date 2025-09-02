import React, { useState } from 'react';
import ChevronDown from '../assets/icons/ChevronDown.svg';

const faqData = [
  {
    question: "What is Project: Level Up?",
    answer: "It's an intelligent habit-building application that uses concepts like 'quests,' 'stats,' and 'leveling up' to make personal growth an engaging journey. We're currently inviting users to the early access waitlist."
  },
  {
    question: "When will the System be online?",
    answer: "We are targeting a launch soon! By joining the waitlist, you'll be the first to receive your invitation and get access before the general public."
  },
  {
    question: "Is there a cost to join the waitlist?",
    answer: "No, joining the registry is free. As a thank you, First Hunters on the waitlist will receive an exclusive introductory offer when we launch."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
  // ... (this part of the component remains the same)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span>{item.question}</span>
        <img src={ChevronDown} alt="toggle" className={`faq-chevron ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="section">
      <h2 className="section-title">[ System Codex ]</h2>
      <p className="section-subtitle">Key intelligence for aspiring Hunters.</p>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};