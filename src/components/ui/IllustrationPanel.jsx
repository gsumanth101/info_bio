import React from 'react';
import { illustrations } from '../../data/illustrations.js';

export function IllustrationPanel({ eyebrow, title, text, variant = 'default', image = illustrations.publicSpeaking }) {
  return (
    <div className={`illustration-panel ${variant}`}>
      <div className="illustration-copy">
        <span>{eyebrow}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="illustration-stage">
        <img src={image} alt="" loading="lazy" aria-hidden="true" />
      </div>
    </div>
  );
}
