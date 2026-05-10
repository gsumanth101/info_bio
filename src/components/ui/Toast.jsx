import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Toast({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="toast" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }}>
          <Check size={18} /> Thanks. Your message is ready for the Inverse Bionics team.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
