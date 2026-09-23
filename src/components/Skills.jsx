import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, categoryStyles, activeTabPill, badgeContainerVariants } from '../data/skills';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  return (
    <section id="skills" className="px-6 pb-20 pt-10 max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {Object.keys(skillCategories).map((category) => {
          const styles = categoryStyles[category];
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors overflow-hidden ${
                isActive ? `text-white ${activeTabPill}` : `bg-white border border-slate-200 ${styles.idleText}`
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="skillTabPill"
                  className={`absolute inset-0 rounded-full ${activeTabPill}`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={isActive ? { rotate: [0, -15, 15, 0] } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {styles.tabIcon}
                </motion.span>
                {category}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={badgeContainerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skillCategories[activeCategory].map((skill) => (
            <SkillBadge
              key={skill.text}
              icon={skill.icon}
              text={skill.text}
              styles={categoryStyles[activeCategory]}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
