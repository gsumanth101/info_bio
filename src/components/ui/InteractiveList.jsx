import React from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal.jsx';

export function InteractiveList({ title, items }) {
  return (
    <Reveal className="interactive-list">
      <h3>{title}</h3>
      {items.map(item => (
        <div className="list-row" key={item}>
          <Check size={15} />
          <span>{item}</span>
        </div>
      ))}
    </Reveal>
  );
}
