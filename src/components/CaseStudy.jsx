import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ChevronDown, ArrowRight, Cpu } from 'lucide-react';
import { slbCaseStudy } from '../data/caseStudy';

const FlowBox = ({ children, accent, muted }) => (
  <div
    className={`px-5 py-3 rounded-xl border text-sm font-semibold text-center shadow-sm ${
      accent
        ? 'bg-amber-600 border-amber-600 text-white'
        : muted
        ? 'bg-slate-50 border-slate-200 text-slate-600'
        : 'bg-white border-slate-200 text-slate-800'
    }`}
  >
    {children}
  </div>
);

const FlowArrow = () => <ChevronDown size={20} className="text-slate-300" />;

const SectionLabel = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">{children}</p>
);

const CaseStudy = ({ highlighted }) => {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const expanded = hovered || pinned || highlighted;

  return (
    <section id={slbCaseStudy.anchorId} className="px-[10%] py-20 bg-slate-50">
      <motion.div
        layout
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setPinned((p) => !p)}
        animate={
          highlighted
            ? { boxShadow: '0 0 0 4px rgba(217,119,6,0.4)' }
            : { boxShadow: '0 0 0 0px rgba(217,119,6,0)' }
        }
        transition={{ layout: { duration: 0.35, ease: 'easeInOut' } }}
        className="group max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer p-8"
      >
        {/* Collapsed header — looks like a normal project card */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <Cpu size={24} />
          </div>
          <div className="flex items-center gap-1.5 text-slate-400" title="Confidential — covered under NDA">
            <Lock size={16} />
            <span className="text-xs font-semibold uppercase tracking-wide">NDA</span>
          </div>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">Featured Case Study</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{slbCaseStudy.title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{slbCaseStudy.summary}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {slbCaseStudy.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 mt-4"
        >
          <span className="rotate-0">{expanded ? 'Click to collapse' : 'Hover or tap to see the full breakdown'}</span>
          <ChevronDown size={14} />
        </motion.div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                {/* The Problem */}
                <div className="mb-10">
                  <SectionLabel>The Problem</SectionLabel>
                  <p className="text-slate-700 leading-relaxed">{slbCaseStudy.problem}</p>
                </div>

                {/* The System */}
                <div className="mb-10">
                  <SectionLabel>The System</SectionLabel>
                  <div className="flex flex-col items-center gap-2 py-2">
                    <FlowBox muted>Product Configuration</FlowBox>
                    <FlowArrow />
                    <FlowBox muted>Python Backend</FlowBox>
                    <FlowArrow />
                    <FlowBox>FastAPI API</FlowBox>

                    <div className="flex items-center gap-16 text-slate-300 text-xl leading-none -my-1">
                      <span>↙</span>
                      <span>↘</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <FlowBox muted>Local App</FlowBox>
                      <FlowBox muted>Web App</FlowBox>
                    </div>

                    <FlowArrow />
                    <FlowBox>Ollama LLM</FlowBox>
                    <FlowArrow />
                    <FlowBox accent>Test Plans + Reports</FlowBox>
                  </div>
                </div>

                {/* The Engineering */}
                <div className="mb-10">
                  <SectionLabel>The Engineering</SectionLabel>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {slbCaseStudy.engineering.map((item) => (
                      <div key={item.title}>
                        <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-sm text-slate-500 flex items-start gap-1.5">
                          <ArrowRight size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Impact */}
                <div>
                  <SectionLabel>The Expected Impact</SectionLabel>
                  <div className="grid grid-cols-2 gap-6 max-w-md">
                    {slbCaseStudy.impact.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-4xl font-bold text-amber-600">{stat.value}</div>
                        <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default CaseStudy;
