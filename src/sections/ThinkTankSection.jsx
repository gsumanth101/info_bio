import React from 'react';
import { MapPin } from 'lucide-react';
import { Counter } from '../components/ui/Counter.jsx';
import { IllustrationPanel } from '../components/ui/IllustrationPanel.jsx';
import { InteractiveList } from '../components/ui/InteractiveList.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { SectionIntro } from '../components/ui/SectionIntro.jsx';
import { illustrations } from '../data/illustrations.js';
import { participantBenefits, participantGroups, pitchTopics, judgingPanel } from '../data/siteContent.jsx';

export function ThinkTankSection() {
  return (
    <section id="thinktank" className="section thinktank-section">
      <SectionIntro
        eyebrow="Inverse Bionics Annual Think Tank - Washington, D.C."
        title="A flagship event for real-world cognitive-health challenges."
        text="Our flagship event unites emerging innovators and global leaders to solve real world challenges in cognitive health."
      />
      <div className="event-shell">
        <Reveal className="event-stage">
          <div className="event-map">
            <IllustrationPanel
              eyebrow="Flagship event"
              title="Students and innovators pitch the future of cognitive health."
              text="Washington, D.C."
              variant="event"
              image={illustrations.publicSpeaking}
            />
            <div className="event-location"><MapPin size={22} /><span>Washington, D.C.</span></div>
          </div>
          <div className="event-stats">
            <div><strong><Counter value={3} /></strong><span>student tracks</span></div>
            <div><strong><Counter value={7} /></strong><span>pitch themes</span></div>
            <div><strong><Counter value={4} /></strong><span>judge domains</span></div>
          </div>
        </Reveal>
        <div className="event-lists">
          <InteractiveList title="Who Can Attend" items={participantGroups} />
          <InteractiveList title="What Participants Can Pitch" items={pitchTopics} />
          <InteractiveList title="Benefits for Participants" items={participantBenefits} />
          <InteractiveList title="Judging Panel" items={judgingPanel} />
        </div>
      </div>
      {/* <Reveal className="judging-panel">
        <h3>Judging Panel</h3>
        <p>Reviewed by top global experts in neurotechnology, cognitive neuroscience, AI modeling, and public-health innovation.</p>
      </Reveal> */}
    </section>
  );
}
