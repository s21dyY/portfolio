import React from 'react';
import SlbCaseStudy from './SlbCaseStudy';
import MsaCaseStudy from './MsaCaseStudy';

const FeaturedWork = ({ highlightedIds = [] }) => (
  <section id="featured-work" className="pt-10 pb-6 bg-slate-50">
    <h2 className="text-4xl font-bold text-center mb-2 text-slate-900">Featured Work</h2>
    <p className="text-center text-slate-500 mb-4">
      A software engineering case study and a data/ML case study — problem, challenge, and what I built.
    </p>
    <SlbCaseStudy highlighted={highlightedIds.includes('case-study-slb')} />
    <MsaCaseStudy highlighted={highlightedIds.includes('case-study-msa')} />
  </section>
);

export default FeaturedWork;
