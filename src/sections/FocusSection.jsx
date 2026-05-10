import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IllustrationPanel } from '../components/ui/IllustrationPanel.jsx';
import { MagneticButton } from '../components/ui/MagneticButton.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { SectionIntro } from '../components/ui/SectionIntro.jsx';
import { illustrations } from '../data/illustrations.js';
import { focusAreas, whatWeDo } from '../data/siteContent.jsx';

export function FocusSection() {
  return (
    <section id="focus" className="section focus-section">
      <SectionIntro
        eyebrow="What We Do"
        title="Cognitive-health systems for the full spectrum of human performance."
        text="We address memory, attention, sleep, executive function, language processing, sensory processing, motor function, learning efficiency, and social cognition."
      />
      <div className="focus-marquee" aria-label="Focus areas">
        {[...focusAreas, ...focusAreas].map((area, index) => <span key={`${area}-${index}`}>{area}</span>)}
      </div>
      <Reveal className="focus-illustration">
        <IllustrationPanel
          eyebrow="AI + multimodal data"
          title="From signal-rich data to earlier cognitive insight."
          text="Visualizing the connection between data integration, AI-driven modeling, and practical cognitive-health systems."
          variant="wide split"
          image={illustrations.allTheData}
        />
        <IllustrationPanel
          eyebrow="Insight generation"
          title="Advanced models help identify changes before they become visible."
          text="A product-like layer for human-centered, AI-assisted decision support."
          variant="wide split"
          image={illustrations.aiResponse}
        />
      </Reveal>
      <div className="feature-grid">
        {whatWeDo.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal delay={index * 0.07} className="feature-card" key={item.title}>
              <div className="feature-icon"><Icon size={24} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="focus-cta">
        <p>Our work blends neuroscience, technology, and public-health strategy to create solutions that are practical, scalable, and human-centered.</p>
        <MagneticButton href="#partners" className="secondary">Explore collaboration <ArrowRight size={18} /></MagneticButton>
      </Reveal>
    </section>
  );
}
