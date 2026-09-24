import {
  Code, Coffee, FileCode2, Database, Sigma,
  Zap, Webhook, Atom, Component, GitBranch, Server, Workflow,
  Bot, Combine, TreePine, Spotlight, FileSearch, Cloud, CloudCog,
  Layers, Sparkles,
} from 'lucide-react';

// `evidence` points a skill at the project(s) that prove it — either a regular
// project id (see data/projects.jsx) or a 'case-study-*' anchor for a featured
// case study (see data/slbCaseStudy.js, data/msaCaseStudy.js). Skills with no
// direct project on the page are left unlinked rather than forced.
export const skillCategories = {
  Languages: [
    { icon: <Code size={18} />, text: 'Python', evidence: ['case-study-slb', 'case-study-msa'] },
    { icon: <Coffee size={18} />, text: 'Java' },
    { icon: <FileCode2 size={18} />, text: 'JavaScript / TypeScript', evidence: ['what-to-eat'] },
    { icon: <Database size={18} />, text: 'SQL' },
    { icon: <Sigma size={18} />, text: 'R' },
  ],
  'Software & APIs': [
    { icon: <Zap size={18} />, text: 'FastAPI', evidence: ['case-study-slb', 'regrag'] },
    { icon: <Webhook size={18} />, text: 'REST APIs', evidence: ['case-study-slb', 'regrag'] },
    { icon: <Atom size={18} />, text: 'React', evidence: ['what-to-eat'] },
    { icon: <Component size={18} />, text: 'Next.js', evidence: ['what-to-eat'] },
    { icon: <GitBranch size={18} />, text: 'Git' },
    { icon: <Server size={18} />, text: 'Backend Integration', evidence: ['case-study-slb'] },
    { icon: <Workflow size={18} />, text: 'Workflow Automation', evidence: ['case-study-slb', 'job-finder'] },
  ],
  'Data & AI': [
    { icon: <Bot size={18} />, text: 'LLM Integration (Ollama, Groq API)', evidence: ['case-study-slb', 'what-to-eat'] },
    { icon: <Combine size={18} />, text: 'ETL / Data Pipelines', evidence: ['case-study-msa', 'job-finder'] },
    { icon: <TreePine size={18} />, text: 'XGBoost' },
    { icon: <Spotlight size={18} />, text: 'Power BI' },
    { icon: <FileSearch size={18} />, text: 'RAG', evidence: ['regrag'] },
    { icon: <Cloud size={18} />, text: 'AWS' },
    { icon: <CloudCog size={18} />, text: 'GCP' },
  ],
};

// The active-tab pill is a single shared color across categories (see Skills.jsx),
// so the layoutId animation only has to morph shape/position, never color mid-flight.
export const activeTabPill = 'bg-amber-600 shadow-lg shadow-amber-200';

export const categoryStyles = {
  Languages: {
    tabIcon: <Code size={16} />,
    idleText: 'text-amber-700 hover:bg-amber-50',
    badge: 'from-amber-50 to-amber-100 border-amber-200 text-amber-800 hover:shadow-amber-200',
    bubble: 'bg-amber-600',
  },
  'Software & APIs': {
    tabIcon: <Layers size={16} />,
    idleText: 'text-orange-700 hover:bg-orange-50',
    badge: 'from-orange-50 to-orange-100 border-orange-200 text-orange-800 hover:shadow-orange-200',
    bubble: 'bg-orange-600',
  },
  'Data & AI': {
    tabIcon: <Sparkles size={16} />,
    idleText: 'text-rose-700 hover:bg-rose-50',
    badge: 'from-rose-50 to-rose-100 border-rose-200 text-rose-800 hover:shadow-rose-200',
    bubble: 'bg-rose-600',
  },
};

export const badgeContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export const badgeItemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.7, rotate: -6 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 350, damping: 18 },
  },
};
