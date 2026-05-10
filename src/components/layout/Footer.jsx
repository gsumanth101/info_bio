import React from 'react';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      <div className="brand">
        <span className="brand-mark"><Brain size={18} /></span>
        <span>Inverse Bionics</span>
      </div>
      <p>Decipher, monitor, and mitigate cognitive decline - and build a healthier, more capable world for all.</p>
    </footer>
  );
}
