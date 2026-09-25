import {
  Code, Coffee, FileCode2, Database, Sigma,
  Zap, Webhook, Atom, Component, GitBranch, Workflow,
  Bot, Combine, TreePine, Spotlight, FileSearch, Cloud, CloudCog,
  Layers, Sparkles, Container, TestTube, Infinity as InfinityIcon,
  Boxes, Link, Server, HardDrive,
} from 'lucide-react';

// `evidence` points a skill at the project(s) that prove it — either a regular
// project id (see data/projects.jsx) or a 'case-study-*' anchor for a featured
// case study (see data/slbCaseStudy.js, data/msaCaseStudy.js). Skills with no
// direct project on the page are left unlinked rather than forced.
//
// TODO: every skill marked "TODO: link" is new. Add the project id(s) where you
// actually used it, e.g. evidence: ['regrag'] for Chroma if that project uses it.
export const skillCategories = {
  Languages: [
    { icon: <Code size={18} />, text: 'Python', evidence: ['case-study-slb', 'case-study-msa'] },
    { icon: <Coffee size={18} />, text: 'Java' },
    { icon: <FileCode2 size={18} />, text: 'JavaScript / TypeScript', evidence: ['what-to-eat'] },
    { icon: <Database size={18} />, text: 'SQL' }, // likely linkable to your ETL projects
    { icon: <Sigma size={18} />, text: 'R' },
  ],
  'Backend & Web': [
    { icon: <Zap size={18} />, text: 'FastAPI', evidence: ['case-study-slb', 'regrag'] },
    { icon: <Webhook size={18} />, text: 'REST APIs', evidence: ['case-study-slb', 'regrag'] },
    { icon: <TestTube size={18} />, text: 'pytest' }, // TODO: link
    { icon: <Workflow size={18} />, text: 'Workflow Automation', evidence: ['case-study-slb', 'job-finder'] },
    { icon: <Atom size={18} />, text: 'React', evidence: ['what-to-eat'] },
    { icon: <Component size={18} />, text: 'Next.js', evidence: ['what-to-eat'] },
  ],
  Databases: [
    { icon: <Database size={18} />, text: 'PostgreSQL' }, // TODO: link
    { icon: <Database size={18} />, text: 'MySQL' },      // TODO: link
    { icon: <HardDrive size={18} />, text: 'SQLite', evidence: [] },
  ],
  'AI & Data': [
    { icon: <Bot size={18} />, text: 'LLM APIs (Ollama, Groq)', evidence: ['case-study-slb', 'what-to-eat'] },
    { icon: <FileSearch size={18} />, text: 'RAG', evidence: ['regrag'] },
    { icon: <Link size={18} />, text: 'LangChain' },   // TODO: link
    { icon: <Boxes size={18} />, text: 'Chroma' },     // TODO: link
    { icon: <Boxes size={18} />, text: 'FAISS' },      // TODO: link
    { icon: <Combine size={18} />, text: 'ETL / Data Pipelines', evidence: ['case-study-msa', 'job-finder'] },
    { icon: <TreePine size={18} />, text: 'XGBoost' },
    { icon: <Spotlight size={18} />, text: 'Power BI' },
  ],
  'Cloud & DevOps': [
    { icon: <Container size={18} />, text: 'Docker' },        // TODO: link
    { icon: <InfinityIcon size={18} />, text: 'CI/CD' },      // TODO: link; name the tool if you can, e.g. 'CI/CD (GitHub Actions)'
    { icon: <GitBranch size={18} />, text: 'Git' },
    { icon: <Cloud size={18} />, text: 'AWS Lambda' },        // TODO: link
    { icon: <Server size={18} />, text: 'AWS EC2' },          // TODO: link
    { icon: <CloudCog size={18} />, text: 'Google BigQuery' },// TODO: link
    { icon: <CloudCog size={18} />, text: 'GCP' },
  ],
};

// The active-tab pill is a single shared color across categories (see Skills.jsx),
// so the layoutId animation only has to morph shape/position, never color mid-flight.
export const activeTabPill = 'bg-amber-600 shadow-lg shadow-amber-200';

// One shared look for every category keeps the section calm and professional.
// Every key in skillCategories MUST have an entry here, or Skills.jsx will crash.
const baseStyle = {
  idleText: 'text-amber-700 hover:bg-amber-50',
  badge: 'from-amber-50 to-amber-100 border-amber-200 text-amber-800 hover:shadow-amber-200',
  bubble: 'bg-amber-600',
};

export const categoryStyles = {
  Languages: { ...baseStyle, tabIcon: <Code size={16} /> },
  'Backend & Web': { ...baseStyle, tabIcon: <Layers size={16} /> },
  Databases: { ...baseStyle, tabIcon: <Database size={16} /> },
  'AI & Data': { ...baseStyle, tabIcon: <Sparkles size={16} /> },
  'Cloud & DevOps': { ...baseStyle, tabIcon: <Cloud size={16} /> },
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
