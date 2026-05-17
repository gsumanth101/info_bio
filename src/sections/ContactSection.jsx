import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IllustrationPanel } from '../components/ui/IllustrationPanel.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { SectionIntro } from '../components/ui/SectionIntro.jsx';
import { illustrations } from '../data/illustrations.js';
import { joinPaths } from '../data/siteContent.jsx';

export function ContactSection({ onSubmit }) {
  return (
    <section id="contact" className="section contact-section">
      <SectionIntro
        eyebrow="Join Us"
        title="Be part of a global movement."
        text="Together, we can strengthen the world's cognitive future."
      />
      <div className="contact-grid">
        <div className="join-cards">
          <Reveal className="contact-illustration">
            <IllustrationPanel
              eyebrow="Reach Inverse Bionics"
              title="Join as a technologist, state leader, volunteer, student, innovator, or partner."
              text="Send a signal and connect with the movement for cognitive health."
              variant="compact"
              image={illustrations.contactUs}
            />
          </Reveal>
          {/* {joinPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal delay={index * 0.07} className="join-card" key={path.title}>
                <Icon size={24} />
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </Reveal>
            );
          })} */}
        </div>
        <Reveal className="contact-form-card">
          <form onSubmit={onSubmit}>
            <label>
              <input name="name" required placeholder=" " />
              <span>Name</span>
            </label>
            <label>
              <input name="email" required type="email" placeholder=" " />
              <span>Email</span>
            </label>
            <label>
              <select name="role" required defaultValue="">
                <option value="" disabled>Choose your path</option>
                <option>Technologist</option>
                <option>State Leader</option>
                <option>Volunteer</option>
                <option>Student or Innovator</option>
                <option>Partner Organization</option>
              </select>
              <span>Path</span>
            </label>
            <label className="message-field">
              <textarea name="message" required placeholder=" " rows="5" />
              <span>Message</span>
            </label>
            <button type="submit">Send Signal <ArrowRight size={18} /></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
