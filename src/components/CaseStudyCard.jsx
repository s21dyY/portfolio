import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ChevronDown } from 'lucide-react';

// Generic collapsible shell for a case study: renders as a normal-looking
// project card at rest, and expands in place on hover/tap to reveal `children`.
// A skill's "see it in a project" link pins it open via the `highlighted` prop.
const CaseStudyCard = ({ id, icon, eyebrow, title, subtitle, summary, tags, nda, highlighted, children }) => {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const expanded = hovered || pinned;

  // Adjust state during render (React's documented pattern) instead of an
  // effect: a rising edge on `highlighted` should pin the card open so it
  // doesn't snap shut once the transient highlight pulse ends.
  const [prevHighlighted, setPrevHighlighted] = useState(highlighted);
  if (highlighted !== prevHighlighted) {
    setPrevHighlighted(highlighted);
    if (highlighted) setPinned(true);
  }

  return (
    <section id={id} className="px-[10%] py-8">
      <motion.div
        layout
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setPinned((p) => !p)}
        animate={
          highlighted
            ? { boxShadow: '0 0 0 4px rgba(217,119,6,0.4)' }
            : { boxShadow: '0 0 0 0px rgba(217,119,6,0)' }
        }
        transition={{ layout: { duration: 0.35, ease: 'easeInOut' } }}
        className="group max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer p-8"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
            {icon}
          </div>
          {nda && (
            <div className="flex items-center gap-1.5 text-slate-400" title="Confidential — covered under NDA">
              <Lock size={16} />
              <span className="text-xs font-semibold uppercase tracking-wide">NDA</span>
            </div>
          )}
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">{eyebrow}</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-1">{title}</h3>
        {subtitle && <p className="text-slate-500 font-medium mb-3">{subtitle}</p>}
        <p className="text-slate-600 leading-relaxed mb-6">{summary}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 mt-4"
        >
          <span className="rotate-0">{expanded ? 'Click to collapse' : 'Hover or tap to see the full breakdown'}</span>
          <ChevronDown size={14} />
        </motion.div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default CaseStudyCard;
