import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { badgeItemVariants } from '../data/skills';

const SkillBadge = ({ icon, text, styles, evidence, onShowEvidence }) => {
  const hasEvidence = Boolean(evidence?.length);

  return (
    <motion.div
      variants={badgeItemVariants}
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={hasEvidence ? { scale: 0.96 } : undefined}
      onClick={hasEvidence ? () => onShowEvidence(evidence) : undefined}
      role={hasEvidence ? 'button' : undefined}
      tabIndex={hasEvidence ? 0 : undefined}
      onKeyDown={
        hasEvidence
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onShowEvidence(evidence);
            }
          : undefined
      }
      title={hasEvidence ? 'See it in a project' : undefined}
      className={`flex items-center gap-2 bg-gradient-to-br px-5 py-2.5 rounded-full shadow-sm border font-semibold text-sm hover:shadow-lg transition-shadow ${
        hasEvidence ? 'cursor-pointer' : 'cursor-default'
      } ${styles.badge}`}
    >
      <motion.span
        whileHover={{ rotate: [0, -18, 18, -10, 0], scale: 1.15 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center w-6 h-6 rounded-full text-white shrink-0 ${styles.bubble}`}
      >
        {icon}
      </motion.span>
      {text}
      {hasEvidence && <ArrowUpRight size={14} className="opacity-60" />}
    </motion.div>
  );
};

export default SkillBadge;
