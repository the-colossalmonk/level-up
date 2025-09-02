import React, { useState } from 'react';
import ChevronDown from '../assets/icons/ChevronDown.svg';

const faqData = [
  {
    question: "What exactly is Arise?",
    answer: "Arise is an intelligent habit-building application currently in the final stages of development. We are inviting users to join our early access waitlist to be the first to experience it."
  },
  {
    question: "When will the app launch?",
    answer: "We are targeting a launch soon! By joining the waitlist, you'll be the first to know the official date and will receive an invitation to access the app before the general public."
  },
  {
    question: "Is joining the waitlist free?",
    answer: "Yes, joining the waitlist is completely free. Waitlist members will also receive an exclusive introductory offer as a thank you for their early support when we launch."
  }
];

// The FAQItem component remains the same
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
      <h2 className="section-title">[ Mission Briefing ]</h2>
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