import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedWork from './components/FeaturedWork';
import Projects from './components/Projects';

const App = () => {
  const [highlightedIds, setHighlightedIds] = useState([]);
  const highlightTimeout = useRef(null);

  const handleShowEvidence = (ids) => {
    if (!ids?.length) return;

    setHighlightedIds(ids);
    const targetId = ids[0].startsWith('case-study-') ? ids[0] : `project-${ids[0]}`;
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    clearTimeout(highlightTimeout.current);
    highlightTimeout.current = setTimeout(() => setHighlightedIds([]), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <Skills onShowEvidence={handleShowEvidence} />
      <Experience />
      <FeaturedWork highlightedIds={highlightedIds} />
      <Projects highlightedIds={highlightedIds} />
    </div>
  );
};

export default App;
