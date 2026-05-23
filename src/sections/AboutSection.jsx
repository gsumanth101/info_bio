import React from 'react';
import { Target } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal.jsx';
import { IllustrationPanel } from '../components/ui/IllustrationPanel.jsx';
import { SectionIntro } from '../components/ui/SectionIntro.jsx';
import { domains, missionSteps } from '../data/siteContent.jsx';
import { illustrations } from '../data/illustrations.js';

export function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <SectionIntro
        eyebrow="Who We Are"
        title="A think tank, innovation hub, and public-health partner."
        text="Inverse Bionics is a Maryland-based organization dedicated to advancing cognitive health through science, engineering, and global collaboration. We unite researchers, technologists, clinicians, policymakers, and industry leaders."
      />

      <div className="bento-grid">
        <Reveal className="bento-card medium-card">
          <span className="card-kicker">Our Mission</span>
          {/* <h3>Decipher, monitor, and mitigate cognitive decline.</h3> */}
          <p>At Inverse Bionics, we bring together the world's best minds, breakthrough technologies, and cross-disciplinary insights to confront this challenge with clarity and purpose.</p>
          <div className="domain-cloud">
            {domains.map(domain => <span key={domain}>{domain}</span>)}
          </div>
        </Reveal>
        <Reveal delay={0.08} className="bento-card">
          <Target size={28} />
          <h3>Our Purpose</h3>
          <p>We exist to solve one of humanity's most urgent challenges: How do we protect and enhance the brain's ability to think, learn, adapt, and thrive?</p>
        </Reveal>
        {/* <Reveal delay={0.16} className="bento-card visual-card">
          <IllustrationPanel
            eyebrow="Cross-disciplinary teams"
            title="Researchers, technologists, clinicians, policymakers, and industry leaders."
            text="A visual system for collaboration across science, engineering, and public health."
            variant="compact"
            image={illustrations.medicalResearch}
          />
          <h3>Human-centered strategy</h3>
          <p>Our work blends neuroscience, technology, and public-health strategy to create solutions that are practical, scalable, and human-centered.</p>
        </Reveal> */}
        {/* <Reveal delay={0.24} className="bento-card timeline-card">
          <span className="card-kicker">Mission / Vision</span>
          {missionSteps.map((item, index) => (
            <div className="timeline-item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </Reveal> */}
      </div>
    </section>
  );
}
