import React from 'react';
import { motion } from 'framer-motion';
import { badgeItemVariants } from '../data/skills';

const SkillBadge = ({ icon, text, styles }) => (
  <motion.div
    variants={badgeItemVariants}
    whileHover={{ scale: 1.08, y: -3 }}
    whileTap={{ scale: 0.96 }}
    className={`flex items-center gap-2 bg-gradient-to-br px-5 py-2.5 rounded-full shadow-sm border font-semibold text-sm cursor-default hover:shadow-lg transition-shadow ${styles.badge}`}
  >
    <motion.span
      whileHover={{ rotate: [0, -18, 18, -10, 0], scale: 1.15 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center w-6 h-6 rounded-full text-white ${styles.bubble}`}
    >
      {icon}
    </motion.span>
    {text}
  </motion.div>
);

export default SkillBadge;
