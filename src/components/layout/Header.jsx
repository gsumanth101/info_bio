import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import { navItems } from '../../data/siteContent.jsx';

export function Header({ active, menuOpen, onOpenMenu, onCloseMenu }) {
  return (
    <>
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Inverse Bionics home">
          <span className="brand-mark"><Brain size={18} /></span>
          <span>Inverse Bionics</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <button className="icon-button menu-button" onClick={onOpenMenu} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-menu-panel" initial={{ y: -24 }} animate={{ y: 0 }} exit={{ y: -24 }}>
              <button className="icon-button close-button" onClick={onCloseMenu} aria-label="Close menu">
                <X size={20} />
              </button>
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={onCloseMenu}>{label}</a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
