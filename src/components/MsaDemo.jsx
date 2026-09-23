import React, { useEffect, useState } from 'react';
import { Info } from 'lucide-react';
import { msaDemo } from '../data/msaCaseStudy';
import { SectionLabel } from './caseStudyPrimitives';
import SensorLineChart from './SensorLineChart';
import PipelineStepper from './PipelineStepper';
import RiskGauge from './RiskGauge';

const TOTAL = msaDemo.anomaly.length;
const TICK_MS = 1300;
const HOLD_TICKS = 2; // pause on the final "Alert" frame before looping

// Steps a synthetic sensor stream through the pipeline one reading at a time:
// each tick reveals the next anomaly point on both charts, advances the
// active pipeline stage, and updates the risk gauge to match.
const MsaDemo = () => {
  const [revealCount, setRevealCount] = useState(2);

  useEffect(() => {
    const id = setInterval(() => {
      setRevealCount((n) => (n >= TOTAL + HOLD_TICKS ? 2 : n + 1));
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  const clamped = Math.min(revealCount, TOTAL);
  const stageIndex = Math.min(
    Math.floor(((clamped - 1) / (TOTAL - 1)) * (msaDemo.stages.length - 1)),
    msaDemo.stages.length - 1
  );
  const currentRisk = msaDemo.anomaly[clamped - 1]?.risk ?? 0;

  return (
    <div>
      <SectionLabel>{msaDemo.label}</SectionLabel>
      <p className="font-semibold text-slate-900 mb-1">{msaDemo.title}</p>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{msaDemo.description}</p>

      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
        <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">{msaDemo.disclaimer}</p>
      </div>

      <PipelineStepper stages={msaDemo.stages} activeIndex={stageIndex} />

      <div className="grid sm:grid-cols-2 gap-4 my-4">
        <SensorLineChart
          title="Pressure"
          unit=" psi"
          dataKey="pressure"
          normal={msaDemo.normal}
          anomaly={msaDemo.anomaly.slice(0, clamped)}
        />
        <SensorLineChart
          title="Temperature"
          unit="°F"
          dataKey="temperature"
          normal={msaDemo.normal}
          anomaly={msaDemo.anomaly.slice(0, clamped)}
        />
      </div>

      <RiskGauge score={currentRisk} />
    </div>
  );
};

export default MsaDemo;
