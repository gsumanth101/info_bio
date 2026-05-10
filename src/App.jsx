import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Toast } from './components/ui/Toast.jsx';
import { useActiveSection } from './hooks/useActiveSection.js';
import { HeroSection } from './sections/HeroSection.jsx';
import { AboutSection } from './sections/AboutSection.jsx';
import { FocusSection } from './sections/FocusSection.jsx';
import { AdvisorsSection } from './sections/AdvisorsSection.jsx';
import { ThinkTankSection } from './sections/ThinkTankSection.jsx';
import { InsightsSection } from './sections/InsightsSection.jsx';
import { PartnersSection } from './sections/PartnersSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';

export default function App() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 28 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 28 });
  const glowStyle = {
    left: useTransform(glowX, value => `${value}px`),
    top: useTransform(glowY, value => `${value}px`)
  };

  useEffect(() => {
    const move = event => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [mouseX, mouseY]);

  const submitForm = event => {
    event.preventDefault();
    setToast(true);
    event.currentTarget.reset();
    setTimeout(() => setToast(false), 3200);
  };

  return (
    <div className="site-shell">
      <motion.div className="cursor-glow" style={glowStyle} />
      <div className="background-grid" aria-hidden="true" />

      <Header
        active={active}
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <FocusSection />
        <AdvisorsSection />
        <ThinkTankSection />
        <InsightsSection />
        <PartnersSection />
        <ContactSection onSubmit={submitForm} />
      </main>

      <Footer />
      <Toast show={toast} />
    </div>
  );
}
