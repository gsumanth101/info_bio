import React from 'react';
import { Reveal } from './Reveal.jsx';

export function SectionIntro({ eyebrow, title, text }) {
  return (
    <Reveal className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </Reveal>
  );
}
