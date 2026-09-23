import React from 'react';
import { Snowflake } from 'lucide-react';
import { msaCaseStudy } from '../data/msaCaseStudy';
import CaseStudyCard from './CaseStudyCard';
import { SectionLabel, StepFlow, FactorStack, StatRow } from './caseStudyPrimitives';

const MsaCaseStudy = ({ highlighted }) => (
  <CaseStudyCard
    id={msaCaseStudy.anchorId}
    icon={<Snowflake size={24} />}
    eyebrow="Featured Case Study · Data / ML"
    title={msaCaseStudy.title}
    subtitle={msaCaseStudy.role}
    summary={msaCaseStudy.summary}
    tags={msaCaseStudy.tags}
    nda
    highlighted={highlighted}
  >
    <div className="mb-10">
      <SectionLabel>The Problem</SectionLabel>
      <p className="text-slate-700 leading-relaxed">{msaCaseStudy.problem}</p>
    </div>

    <div className="mb-10">
      <SectionLabel>The Challenge</SectionLabel>
      <FactorStack items={msaCaseStudy.challenge} />
    </div>

    <div className="mb-10">
      <SectionLabel>How We Approached It</SectionLabel>
      <StepFlow steps={msaCaseStudy.approach} />
    </div>

    <div className="mb-10">
      <SectionLabel>From Sensor Data to Prediction</SectionLabel>
      <StepFlow steps={msaCaseStudy.pipelineSteps} />
    </div>

    <div>
      <SectionLabel>The Result</SectionLabel>
      <StatRow stats={msaCaseStudy.result} />
      <p className="text-slate-600 leading-relaxed mt-4 max-w-2xl">{msaCaseStudy.resultNote}</p>
    </div>
  </CaseStudyCard>
);

export default MsaCaseStudy;
