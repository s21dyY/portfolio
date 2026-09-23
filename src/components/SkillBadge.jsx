import React from 'react';
import { motion } from 'framer-motion';
import { badgeItemVariants } from '../data/skills';

const SkillBadge = ({
  icon,
  text,
  styles,
  isSelected,
  onClick,
}) => (
  <motion.button
    variants={badgeItemVariants}
    whileHover={{ scale: 1.06, y: -3 }}
    whileTap={{ scale: 0.97 }}
    animate={{
      y: isSelected ? -4 : 0,
    }}
    onClick={onClick}
    className={`
      relative
      flex items-center gap-2
      bg-gradient-to-br
      px-5 py-2.5
      rounded-full
      border
      font-semibold text-sm
      transition-shadow
      ${styles.badge}
      ${isSelected ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
    `}
  >
    <motion.span
      animate={
        isSelected
          ? { rotate: [0, -10, 10, 0], scale: 1.08 }
          : { rotate: 0, scale: 1 }
      }
      transition={{ duration: 0.35 }}
      className={`
        flex items-center justify-center
        w-6 h-6
        rounded-full
        text-white
        ${styles.bubble}
      `}
    >
      {icon}
    </motion.span>

    <span>{text}</span>

    {/* Selected indicator */}
    {isSelected && (
      <motion.span
        layoutId="selectedSkillDot"
        className={`
          absolute
          -bottom-2
          left-1/2
          -translate-x-1/2
          w-1.5 h-1.5
          rounded-full
          ${styles.bubble}
        `}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      />
    )}
  </motion.button>
);

export default SkillBadge;