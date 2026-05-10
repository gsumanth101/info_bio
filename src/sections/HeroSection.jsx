import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Brain, ChevronDown, Moon, Network, Play, Sparkles } from 'lucide-react';
import { Counter } from '../components/ui/Counter.jsx';
import { MagneticButton } from '../components/ui/MagneticButton.jsx';
import { NeuralCanvas } from '../components/ui/NeuralCanvas.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';

export function HeroSection() {
  return (
    <section id="home" className="hero section">
      <NeuralCanvas />
      <div className="hero-content">
        <Reveal className="eyebrow"><Sparkles size={16} /> Cognitive health, neuroscience, AI, and innovation</Reveal>
        <Reveal delay={0.08} as="h1">Reimagining the Future of Cognitive Health</Reveal>
        <Reveal delay={0.16} className="hero-copy">
          Cognitive decline is the world's fastest-growing public-health challenge. According to the CDC, 1 in 9 people experience measurable cognitive decline, and the impact spans every age group - from young adults to older populations.
        </Reveal>
        <Reveal delay={0.24} className="hero-actions">
          <MagneticButton href="#contact">Join the Movement <ArrowRight size={18} /></MagneticButton>
          <MagneticButton href="#thinktank" className="secondary">Explore Think Tank <Play size={17} /></MagneticButton>
        </Reveal>
      </div>

      <motion.div className="hero-dashboard" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }}>
        <div className="dash-top">
          <span>Neural resilience index</span>
          <Activity size={18} />
        </div>
        <div className="brain-orb">
          <div className="orb-ring ring-one" />
          <div className="orb-ring ring-two" />
          <Brain size={74} />
        </div>
        <div className="metric-row">
          <div><strong><Counter value={9} /></strong><span>cognitive domains</span></div>
          <div><strong><Counter value={1} /> in <Counter value={9} /></strong><span>CDC signal</span></div>
          <div><strong><Counter value={4} /></strong><span>movement paths</span></div>
        </div>
      </motion.div>

      <div className="floating-card card-a"><Moon size={18} /> Sleep & circadian health</div>
      <div className="floating-card card-b"><Network size={18} /> Multimodal AI</div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about"><ChevronDown size={22} /></a>
    </section>
  );
}
