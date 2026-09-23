import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import CaseStudy from './components/CaseStudy';
import Projects from './components/Projects';
import { slbCaseStudy } from './data/caseStudy';

const App = () => {
  const [highlightedIds, setHighlightedIds] = useState([]);
  const highlightTimeout = useRef(null);

  const handleShowEvidence = (ids) => {
    if (!ids?.length) return;

    setHighlightedIds(ids);
    const targetId = ids.includes('case-study-slb')
      ? slbCaseStudy.anchorId
      : `project-${ids[0]}`;
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    clearTimeout(highlightTimeout.current);
    highlightTimeout.current = setTimeout(() => setHighlightedIds([]), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <Skills onShowEvidence={handleShowEvidence} />
      <CaseStudy highlighted={highlightedIds.includes('case-study-slb')} />
      <Projects highlightedIds={highlightedIds} />
    </div>
  );
};

export default App;
