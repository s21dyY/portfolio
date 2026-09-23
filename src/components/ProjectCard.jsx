import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock, Github, ExternalLink } from 'lucide-react';

const StatusBadge = ({ status, githubUrl, demoUrl }) => {
  if (status === 'nda') {
    return (
      <div className="flex items-center gap-1.5 text-slate-400" title="Confidential — covered under NDA">
        <Lock size={16} />
        <span className="text-xs font-semibold uppercase tracking-wide">NDA</span>
      </div>
    );
  }

  if (status === 'in-progress') {
    return (
      <div className="flex items-center gap-1.5 text-slate-400" title="Project in progress">
        <Clock size={16} />
        <span className="text-xs font-semibold uppercase tracking-wide">In Progress</span>
      </div>
    );
  }

  return (
    <div className="flex gap-3 text-slate-400">
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
          <Github size={20} className="hover:text-slate-900 cursor-pointer" />
        </a>
      )}
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
          <ExternalLink size={20} className="hover:text-slate-900 cursor-pointer" />
        </a>
      )}
    </div>
  );
};

const ProjectCard = ({ id, icon, title, description, tags, status, githubUrl, demoUrl, highlighted }) => (
  <motion.div
    id={`project-${id}`}
    animate={
      highlighted
        ? { boxShadow: '0 0 0 4px rgba(217,119,6,0.4)' }
        : { boxShadow: '0 0 0 0px rgba(217,119,6,0)' }
    }
    transition={{ duration: 0.4 }}
    className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <StatusBadge status={status} githubUrl={githubUrl} demoUrl={demoUrl} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;
