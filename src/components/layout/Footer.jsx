import React from 'react';
import { inverseBionicsLogo } from '../../assets/brand/logo.js';

export function Footer() {
  return (
    <footer>
      <div className="brand">
        <span className="brand-mark image-mark"><img src={inverseBionicsLogo} alt="" aria-hidden="true" /></span>
        <span>Inverse Bionics</span>
      </div>
      <p>Decipher, monitor, and mitigate cognitive decline - and build a healthier, more capable world for all.</p>
    </footer>
  );
}
