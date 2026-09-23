import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ title, org, location, dates, bullets, isLast }) => (
  <div className={`relative pl-10 ${isLast ? '' : 'pb-12'}`}>
    <span className="absolute -left-[9px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-amber-600 ring-4 ring-white" />
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
        <Briefcase size={18} className="text-amber-600" />
        {title}
      </h3>
      <span className="text-sm font-medium text-slate-400">{dates}</span>
    </div>
    <p className="text-slate-500 font-medium mb-3">{org} · {location}</p>
    <ul className="space-y-1.5">
      {bullets.map((b, i) => (
        <li key={i} className="text-slate-600 leading-relaxed flex gap-2">
          <span className="text-amber-600 mt-1">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceItem;
