import React, { useState } from 'react';
import ChevronDown from '../assets/icons/ChevronDown.svg';

const faqData = [
  {
    question: "Is this just another habit tracker?",
    answer: "No. While it tracks habits, its core is the AI Architect that provides personalized, evolving challenges. It's a growth system, not a passive logbook."
  },
  {
    question: "How does the AI work?",
    answer: "The AI analyzes your successes and failures to understand your unique psychological profile. It then generates 'quests' designed to target your specific weaknesses and accelerate your strengths, much like a personal coach."
  },
  {
    question: "What does 'joining the registry' mean?",
    answer: "By joining, you are signing up for early access and becoming part of our founding cohort of 'Hunters.' You'll receive exclusive updates and the opportunity to shape the future of the System."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
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