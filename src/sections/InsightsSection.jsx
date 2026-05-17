import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal.jsx';
import { IllustrationPanel } from '../components/ui/IllustrationPanel.jsx';
import { SectionIntro } from '../components/ui/SectionIntro.jsx';
import { illustrations } from '../data/illustrations.js';
import { insightTopics, interviewCards } from '../data/siteContent.jsx';

export function InsightsSection() {
  return (
    <section id="insights" className="section insights-section">
      <SectionIntro
        eyebrow="Leadership Interviews & Insights"
        title="Conversations with the minds shaping cognitive health."
        text="Featuring interviews, talks, and insights from global leaders in neuroscience, neurotechnology, AI, public health, and human‑performance science."
      />
      {/* <Reveal className="insights-illustration">
        <IllustrationPanel
          eyebrow="Leadership voices"
          title="Talks, interviews, podcasts, keynote sessions, and emerging perspectives."
          text="A media layer for the global leaders shaping cognitive health."
          variant="wide"
          image={illustrations.publicSpeaking}
        />
      </Reveal> */}
      <div className="media-row">
        {interviewCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal delay={index * 0.08} className="media-card" key={`${card.type}-${card.title}`}>
              <div className="media-visual">
                <Icon size={36} />
                <span>{card.type}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button>{card.action} <ArrowRight size={16} /></button>
            </Reveal>
          );
        })}
      </div>
      {/* <div className="tabs-panel">
        {insightTopics.map(item => (
          <span key={item}><Check size={15} />{item}</span>
        ))}
      </div> */}
    </section>
  );
}
