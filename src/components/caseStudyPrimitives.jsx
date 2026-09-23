import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const SectionLabel = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">{children}</p>
);

// A single box in a flow diagram (used by SLB's branching system diagram).
export const FlowBox = ({ children, accent, muted }) => (
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

export const FlowArrow = () => <ChevronDown size={20} className="text-slate-300" />;

// A straight vertical chain of steps (used by MSA's ML pipeline).
export const LinearFlow = ({ steps }) => (
  <div className="flex flex-col items-center gap-2 py-2">
    {steps.map((step, i) => (
      <React.Fragment key={step}>
        <FlowBox muted={i !== steps.length - 1} accent={i === steps.length - 1}>
          {step}
        </FlowBox>
        {i < steps.length - 1 && <FlowArrow />}
      </React.Fragment>
    ))}
  </div>
);

// Numbered step cards connected by arrows — the "how I approached it" pattern
// shared by both case studies' Challenge sections.
export const StepFlow = ({ steps }) => (
  <div className="flex flex-col sm:flex-row items-stretch gap-3">
    {steps.map((step, i) => (
      <React.Fragment key={step.title}>
        <div className="flex-1 min-w-[180px] bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold text-amber-600 mb-2">{String(i + 1).padStart(2, '0')}</p>
          <p className="font-semibold text-slate-900 mb-1">{step.title}</p>
          <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
        </div>
        {i < steps.length - 1 && (
          <div className="hidden sm:flex items-center justify-center text-slate-300 shrink-0">
            <ArrowRight size={18} />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

// Short phrases stacked with "+" between them — for factors that combine into
// one constraint (used by MSA's Challenge section).
export const FactorStack = ({ items }) => (
  <div className="flex flex-col items-center gap-2">
    {items.map((item, i) => (
      <React.Fragment key={item}>
        {i > 0 && <span className="text-slate-300 text-lg font-bold leading-none">+</span>}
        <div className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 text-center">
          {item}
        </div>
      </React.Fragment>
    ))}
  </div>
);

// Big-number impact/result tiles.
export const StatRow = ({ stats }) => (
  <div className="grid grid-cols-2 gap-6 max-w-md">
    {stats.map((stat) => (
      <div key={stat.label}>
        <div className="text-4xl font-bold text-amber-600">{stat.value}</div>
        <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
      </div>
    ))}
  </div>
);
