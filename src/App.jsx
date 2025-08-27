import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all the building blocks (components) of your page
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mandate } from './components/Mandate';
import { AiArchitect } from './components/AiArchitect';
import { ShadowArmySection } from './components/ShadowArmySection';
import { AscensionPath } from './components/AscensionPath';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { RegistryModal } from './components/RegistryModal';
import { Footer } from './components/Footer';

// Register the GSAP plugin for scroll animations
gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Effect to handle the preloader timing
  useEffect(() => {
    // Simulate a 2.5 second "system boot-up"
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Effect to set up all the scroll-triggered animations
  useLayoutEffect(() => {
    if (loading) return; // Wait for the preloader to finish
    const ctx = gsap.context((self) => {
      const sections = self.selector('.section');
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // Animate in when the top of the section is 80% from the top of the viewport
            toggleActions: 'play none none none',
          },
          duration: 1,
          ease: 'power3.out',
        });
      });
    }, main);
    return () => ctx.revert(); // Cleanup GSAP animations
  }, [loading]);

  // Functions to be passed to child components to control the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Conditionally render the Preloader or the main app
  if (loading) {
    return <Preloader />;
  }

  return (
    <div ref={main}>
      <Header onRegisterClick={openModal} />
      <main>
        <Hero onRegisterClick={openModal} />
        <Mandate />
        <AiArchitect />
        <ShadowArmySection />
        <AscensionPath />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      {/* Conditionally render the modal based on its state */}
      {isModalOpen && <RegistryModal onClose={closeModal} />}
    </div>
  );
}

export default App;