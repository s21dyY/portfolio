import {
  Code, Coffee, FileCode2, Database, Sigma,
  Zap, Webhook, Atom, Component, GitBranch, Server, Workflow,
  Bot, Combine, TreePine, Spotlight, FileSearch, Cloud, CloudCog,
  Layers, Sparkles,
} from 'lucide-react';

export const skillCategories = {
  Languages: [
    { icon: <Code size={18} />, text: 'Python' },
    { icon: <Coffee size={18} />, text: 'Java' },
    { icon: <FileCode2 size={18} />, text: 'JavaScript / TypeScript' },
    { icon: <Database size={18} />, text: 'SQL' },
    { icon: <Sigma size={18} />, text: 'R' },
  ],
  'Software & APIs': [
    { icon: <Zap size={18} />, text: 'FastAPI' },
    { icon: <Webhook size={18} />, text: 'REST APIs' },
    { icon: <Atom size={18} />, text: 'React' },
    { icon: <Component size={18} />, text: 'Next.js' },
    { icon: <GitBranch size={18} />, text: 'Git' },
    { icon: <Server size={18} />, text: 'Backend Integration' },
    { icon: <Workflow size={18} />, text: 'Workflow Automation' },
  ],
  'Data & AI': [
    { icon: <Bot size={18} />, text: 'LLM Integration (Ollama, Groq API)' },
    { icon: <Combine size={18} />, text: 'ETL / Data Pipelines' },
    { icon: <TreePine size={18} />, text: 'XGBoost' },
    { icon: <Spotlight size={18} />, text: 'Power BI' },
    { icon: <FileSearch size={18} />, text: 'RAG' },
    { icon: <Cloud size={18} />, text: 'AWS' },
    { icon: <CloudCog size={18} />, text: 'GCP' },
  ],
};

export const categoryStyles = {
  Languages: {
    tabIcon: <Code size={16} />,
    pill: 'bg-amber-600 shadow-lg shadow-amber-200',
    idleText: 'text-amber-700 hover:bg-amber-50',
    badge: 'from-amber-50 to-orange-100 border-amber-200 text-amber-800 hover:shadow-amber-200',
    bubble: 'bg-amber-500',
  },
  'Software & APIs': {
    tabIcon: <Layers size={16} />,
    pill: 'bg-sky-600 shadow-lg shadow-sky-200',
    idleText: 'text-sky-700 hover:bg-sky-50',
    badge: 'from-sky-50 to-blue-100 border-sky-200 text-sky-800 hover:shadow-sky-200',
    bubble: 'bg-sky-500',
  },
  'Data & AI': {
    tabIcon: <Sparkles size={16} />,
    pill: 'bg-violet-600 shadow-lg shadow-violet-200',
    idleText: 'text-violet-700 hover:bg-violet-50',
    badge: 'from-violet-50 to-fuchsia-100 border-violet-200 text-violet-800 hover:shadow-violet-200',
    bubble: 'bg-violet-500',
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
