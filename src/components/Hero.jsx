import React, { useState, useEffect } from 'react';
import SystemCore from '../assets/SystemCore.svg';

// The useTypingEffect hook remains the same
const useTypingEffect = (text, duration) => {
  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentText = '';
      const interval = setInterval(() => {
        if (currentText.length < text.length) {
          currentText += text[currentText.length];
          setTypedText(currentText);
        } else {
          clearInterval(interval);
        }
      }, duration / text.length);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timeout);
  }, [text, duration]);
  return typedText;
};

export const Hero = ({ onRegisterClick }) => {
  const typedHeadline = useTypingEffect("An Invitation to Level Up.", 1500);

  return (
    <section className="hero-section section" style={{ opacity: 1, transform: 'none' }}>
      <img src={SystemCore} alt="System Core" className="system-core" />
      <h1>{typedHeadline}<span className="typing-cursor">_</span></h1>
      <p>The next generation of habit formation is coming. Be the first to experience it.</p>
      <button onClick={onRegisterClick} className="system-button">
        Request Early Access
      </button>
    </section>
  );
};