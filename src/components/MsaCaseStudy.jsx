import React from 'react';
import { Snowflake } from 'lucide-react';
import { msaCaseStudy } from '../data/msaCaseStudy';
import CaseStudyCard from './CaseStudyCard';
import { SectionLabel, StepFlow, StepGrid, CardGrid, TagList } from './caseStudyPrimitives';
import MsaDemo from './MsaDemo';

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
      <CardGrid items={msaCaseStudy.challenge} />
    </div>

    <div className="mb-10">
      <SectionLabel>How We Approached It</SectionLabel>
      <StepFlow steps={msaCaseStudy.approach} />
    </div>

    <div className="mb-10">
      <SectionLabel>The Technical Pipeline</SectionLabel>
      <StepGrid items={msaCaseStudy.technicalPipeline} />
    </div>

    <div className="mb-10">
      <SectionLabel>{msaCaseStudy.featureEngineering.title}</SectionLabel>
      <p className="text-slate-700 leading-relaxed mb-4">{msaCaseStudy.featureEngineering.description}</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {msaCaseStudy.featureEngineering.groups.map((group) => (
          <div key={group.title}>
            <p className="font-semibold text-slate-900 mb-2">{group.title}</p>
            <TagList items={group.examples} />
          </div>
        ))}
      </div>
    </div>

    <div className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">{msaCaseStudy.failureAnalysis.eyebrow}</p>
      <p className="font-semibold text-slate-900 text-lg mb-3">{msaCaseStudy.failureAnalysis.title}</p>
      <p className="text-slate-700 leading-relaxed mb-6">{msaCaseStudy.failureAnalysis.description}</p>
      <StepFlow steps={msaCaseStudy.failureAnalysis.flow} />
      <p className="text-slate-700 leading-relaxed italic mt-6">{msaCaseStudy.failureAnalysis.takeaway}</p>
    </div>

    <div className="mb-10">
      <SectionLabel>{msaCaseStudy.evaluation.title}</SectionLabel>
      <p className="text-slate-700 leading-relaxed mb-4">{msaCaseStudy.evaluation.description}</p>
      <TagList items={msaCaseStudy.evaluation.metrics} />
    </div>

    <div className="mb-10">
      <MsaDemo />
    </div>

    <div className="mb-10">
      <SectionLabel>{msaCaseStudy.result.title}</SectionLabel>
      <p className="text-slate-700 leading-relaxed">{msaCaseStudy.result.description}</p>
      <p className="text-sm text-slate-400 italic mt-3">{msaCaseStudy.result.note}</p>
    </div>

    <div>
      <SectionLabel>{msaCaseStudy.takeaway.title}</SectionLabel>
      <p className="text-slate-700 leading-relaxed">{msaCaseStudy.takeaway.description}</p>
    </div>
  </CaseStudyCard>
);

export default MsaCaseStudy;
