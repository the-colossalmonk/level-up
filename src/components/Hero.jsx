import React, { useState, useEffect } from 'react';
import SystemCore from '../assets/SystemCore.svg';

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
  const typedHeadline = useTypingEffect("The System has chosen you, time to Level Up.", 2000);

  return (
    <section className="hero-section section" style={{ opacity: 1, transform: 'none' }}>
      <img src={SystemCore} alt="System Core" className="system-core" />
      <h1>{typedHeadline}<span className="typing-cursor">_</span></h1>
      <p>An intelligent habit-building system inspired by the ultimate growth journey. Join the waitlist for your invitation.</p>
      <button onClick={onRegisterClick} className="system-button">
        Request Early Access
      </button>
    </section>
  );
};