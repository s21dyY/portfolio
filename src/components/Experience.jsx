import React from 'react';
import { experience } from '../data/experience';
import ExperienceItem from './ExperienceItem';

const Experience = () => (
  <section id="experience" className="px-[10%] py-20 bg-white">
    <h2 className="text-4xl font-bold mb-12 text-slate-900">Experience</h2>

    <div className="relative border-l-2 border-slate-100 ml-3">
      {experience.map((item, i) => (
        <ExperienceItem key={item.title + item.org} {...item} isLast={i === experience.length - 1} />
      ))}
    </div>
  </section>
);

export default Experience;
