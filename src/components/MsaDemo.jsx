import React from 'react';
import { Info } from 'lucide-react';
import { msaDemo } from '../data/msaCaseStudy';
import { SectionLabel, LinearFlow } from './caseStudyPrimitives';
import SensorLineChart from './SensorLineChart';

const MsaDemo = () => (
  <div>
    <SectionLabel>{msaDemo.label}</SectionLabel>

    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
      <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">{msaDemo.disclaimer}</p>
    </div>

    <div className="grid sm:grid-cols-2 gap-4 mb-8">
      <SensorLineChart title="Pressure" unit=" psi" dataKey="pressure" normal={msaDemo.normal} anomaly={msaDemo.anomaly} />
      <SensorLineChart title="Temperature" unit="°F" dataKey="temperature" normal={msaDemo.normal} anomaly={msaDemo.anomaly} />
    </div>

    <LinearFlow steps={msaDemo.pipeline} />
  </div>
);

export default MsaDemo;
