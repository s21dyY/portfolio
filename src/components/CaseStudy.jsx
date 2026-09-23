import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ChevronDown, ArrowRight } from 'lucide-react';
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

const CaseStudy = ({ highlighted }) => (
  <section
    id={slbCaseStudy.anchorId}
    className="px-[10%] py-20 bg-white"
  >
    <motion.div
      animate={highlighted ? { boxShadow: '0 0 0 4px rgba(217,119,6,0.4)' } : { boxShadow: '0 0 0 0px rgba(217,119,6,0)' }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-amber-100 bg-slate-50/60 p-8 md:p-12"
    >
      <div className="flex justify-between items-start mb-8 flex-wrap gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Featured Case Study</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{slbCaseStudy.title}</h2>
          <p className="text-slate-500 font-medium mt-1">{slbCaseStudy.role}</p>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400" title="Confidential — covered under NDA">
          <Lock size={16} />
          <span className="text-xs font-semibold uppercase tracking-wide">NDA</span>
        </div>
      </div>

      {/* The Problem */}
      <div className="mb-10">
        <SectionLabel>The Problem</SectionLabel>
        <p className="text-slate-700 leading-relaxed max-w-3xl">{slbCaseStudy.problem}</p>
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
    </motion.div>
  </section>
);

export default CaseStudy;
