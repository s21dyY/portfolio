import React from 'react';
import { motion } from 'framer-motion';

// A horizontal row of pipeline stages where one stage is "active" at a time —
// used by MsaDemo to show which processing step the animated stream is in.
const PipelineStepper = ({ stages, activeIndex }) => (
  <div className="flex items-center gap-1 sm:gap-2">
    {stages.map((stage, i) => {
      const done = i < activeIndex;
      const active = i === activeIndex;
      return (
        <React.Fragment key={stage}>
          <motion.div
            animate={{
              backgroundColor: active ? '#d97706' : done ? '#fef3c7' : '#f8fafc',
              color: active ? '#ffffff' : done ? '#b45309' : '#94a3b8',
              scale: active ? 1.05 : 1,
            }}
            transition={{ duration: 0.35 }}
            className="flex-1 min-w-0 rounded-lg border border-slate-200 px-2 py-2.5 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wide truncate"
          >
            {stage}
          </motion.div>
          {i < stages.length - 1 && <div className="w-2 sm:w-4 h-px bg-slate-200 shrink-0" />}
        </React.Fragment>
      );
    })}
  </div>
);

export default PipelineStepper;
