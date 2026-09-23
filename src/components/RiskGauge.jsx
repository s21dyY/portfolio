import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

// A model-output meter for MsaDemo: fills and recolors as the animated
// classification score rises across the synthetic leak event.
const RiskGauge = ({ score }) => {
  const pct = Math.round(score * 100);
  const alert = score >= 0.6;
  const watch = score >= 0.3;
  const label = alert ? 'Leak risk: elevated' : watch ? 'Leak risk: watch' : 'Leak risk: normal';
  const color = alert ? '#dc2626' : watch ? '#d97706' : '#16a34a';

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {alert ? <AlertTriangle size={16} style={{ color }} /> : <ShieldCheck size={16} style={{ color }} />}
          <span className="text-sm font-semibold" style={{ color }}>
            {label}
          </span>
        </div>
        <span className="text-sm font-bold text-slate-700 tabular-nums">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
      <p className="text-xs text-slate-400 mt-2">Classifier output for the synthetic stream, live — not a real detection.</p>
    </div>
  );
};

export default RiskGauge;
