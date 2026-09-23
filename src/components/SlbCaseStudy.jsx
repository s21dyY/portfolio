import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { slbCaseStudy } from '../data/slbCaseStudy';
import CaseStudyCard from './CaseStudyCard';
import { SectionLabel, StepFlow, FlowBox, FlowArrow, StatRow } from './caseStudyPrimitives';

const SlbCaseStudy = ({ highlighted }) => (
  <CaseStudyCard
    id={slbCaseStudy.anchorId}
    icon={<Cpu size={24} />}
    eyebrow="Featured Case Study · Software Engineering"
    title={slbCaseStudy.title}
    subtitle={slbCaseStudy.role}
    summary={slbCaseStudy.summary}
    tags={slbCaseStudy.tags}
    nda
    highlighted={highlighted}
  >
    <div className="mb-10">
      <SectionLabel>The Problem</SectionLabel>
      <p className="text-slate-700 leading-relaxed">{slbCaseStudy.problem}</p>
    </div>

    <div className="mb-10">
      <SectionLabel>The Challenge → How I Approached It</SectionLabel>
      <p className="text-slate-700 leading-relaxed mb-6">{slbCaseStudy.challenge}</p>
      <StepFlow steps={slbCaseStudy.approach} />
    </div>

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

    <div>
      <SectionLabel>The Expected Impact</SectionLabel>
      <StatRow stats={slbCaseStudy.impact} />
    </div>
  </CaseStudyCard>
);

export default SlbCaseStudy;
