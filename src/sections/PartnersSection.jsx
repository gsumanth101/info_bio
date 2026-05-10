import React from 'react';
import { ArrowRight, RadioTower, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { IllustrationPanel } from '../components/ui/IllustrationPanel.jsx';
import { SectionIntro } from '../components/ui/SectionIntro.jsx';
import { illustrations } from '../data/illustrations.js';
import { partnerReasons, partners } from '../data/siteContent.jsx';

export function PartnersSection() {
  return (
    <section id="partners" className="section partners-section">
      <SectionIntro
        eyebrow="Partner With Us"
        title="Let's strengthen cognitive health together."
        text="Whether you're a government leader, healthcare organization, or corporation seeking meaningful CSR impact, we welcome partnerships that move the world toward better cognitive wellbeing."
      />
      <div className="partner-layout">
        <Reveal className="partner-card primary">
          <RadioTower size={34} />
          <IllustrationPanel
            eyebrow="Partnership network"
            title="Universities, corporations, governments, and health agencies moving together."
            text="A collaboration model built for community-level cognitive-health programs."
            variant="compact"
            image={illustrations.liveCollaboration}
          />
          <h3>Collaborate with Inverse Bionics</h3>
          <p>We collaborate with state and regional health agencies, educational institutions, corporations and CSR programs, nonprofits and community organizations, research labs, and innovation hubs.</p>
          <MagneticButton href="#contact">Start a Partnership <ArrowRight size={18} /></MagneticButton>
        </Reveal>
        <div className="trust-grid">
          {partnerReasons.map((reason, index) => (
            <Reveal delay={index * 0.06} className="trust-card" key={reason}>
              <ShieldCheck size={20} />
              <span>{reason}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="partner-strip">
        {partners.map(partner => <span key={partner}>{partner}</span>)}
      </div>
    </section>
  );
}
