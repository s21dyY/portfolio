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

// A straight vertical chain of steps (used by MSA's demo pipeline).
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

// Numbered step cards connected by arrows, for a short (<=4) sequential
// process — the "how I approached it" pattern shared by both case studies.
// `step.number` overrides the auto-generated 01/02/03 index label.
export const StepFlow = ({ steps }) => (
  <div className="flex flex-col sm:flex-row items-stretch gap-3">
    {steps.map((step, i) => (
      <React.Fragment key={step.title}>
        <div className="flex-1 min-w-[180px] bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold text-amber-600 mb-2">{step.number ?? String(i + 1).padStart(2, '0')}</p>
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

// A responsive grid of numbered cards with no connecting arrows — for a
// longer sequential list (e.g. a 6-stage technical pipeline) where a single
// connected row would overflow the card.
export const StepGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item, i) => (
      <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <p className="text-xs font-bold text-amber-600 mb-2">{item.number ?? String(i + 1).padStart(2, '0')}</p>
        <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
);

// A grid of parallel (non-sequential) factor cards — no numbering, since
// order doesn't matter (e.g. co-occurring constraints in a Challenge section).
export const CardGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {items.map((item) => (
      <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
);

// A row of small pill tags — for feature-group examples, eval metrics, etc.
export const TagList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">
        {item}
      </span>
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
