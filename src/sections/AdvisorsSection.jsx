import React from 'react';
import { ArrowRight, Mail, Orbit } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal.jsx';
import { IllustrationPanel } from '../components/ui/IllustrationPanel.jsx';
import { SectionIntro } from '../components/ui/SectionIntro.jsx';
import { illustrations } from '../data/illustrations.js';
import { advisorAreas } from '../data/siteContent.jsx';

export function AdvisorsSection() {
  return (
    <section id="advisors" className="section advisors-section">
      <SectionIntro
        eyebrow="Guided by Global Leaders"
        title="Scientific rigor shaped by a cross-disciplinary advisory network."
        text="These advisors shape our scientific direction, ensure rigor, and help us stay aligned with global needs and emerging breakthroughs."
      />
      <Reveal className="advisor-illustration">
        <IllustrationPanel
          eyebrow="Clinical and scientific rigor"
          title="A grounded advisory layer for cognitive rehabilitation, public health, and neurotechnology."
          text="A visual cue for expert review, healthcare strategy, and evidence-aligned innovation."
          variant="wide"
          image={illustrations.medicalCare}
        />
      </Reveal>
      <div className="advisor-grid">
        {advisorAreas.map((area, index) => (
          <Reveal delay={index * 0.06} className="advisor-card" key={area}>
            <div className="advisor-avatar"><Orbit size={30} /></div>
            <h3>{area}</h3>
            <div className="social-row">
              <button aria-label="Advisor profile"><ArrowRight size={16} /></button>
              <button aria-label="Advisor message"><Mail size={16} /></button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
