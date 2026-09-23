import React from 'react';

// A small single-metric line chart comparing two series (normal vs. anomaly).
// Deliberately one metric per chart (never pressure+temperature together on
// one axis, since they're different scales) with a legend, 2px lines, a
// hairline baseline, and direct end-of-line value labels.
const WIDTH = 280;
const HEIGHT = 140;
const PADDING = { top: 10, right: 40, bottom: 20, left: 10 };

const toPoints = (series, dataKey, min, range) =>
  series.map((d, i) => ({
    x: PADDING.left + (i / (series.length - 1)) * (WIDTH - PADDING.left - PADDING.right),
    y: PADDING.top + (1 - (d[dataKey] - min) / range) * (HEIGHT - PADDING.top - PADDING.bottom),
    value: d[dataKey],
  }));

const toPath = (points) => points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');

const SensorLineChart = ({ title, unit, dataKey, normal, anomaly }) => {
  const values = [...normal, ...anomaly].map((d) => d[dataKey]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const normalPoints = toPoints(normal, dataKey, min, range);
  const anomalyPoints = toPoints(anomaly, dataKey, min, range);
  const normalEnd = normalPoints[normalPoints.length - 1];
  const anomalyEnd = anomalyPoints[anomalyPoints.length - 1];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
        <p className="text-sm font-semibold text-slate-700">{title}</p>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
            Normal
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-600 inline-block" />
            Anomaly
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-auto">
        <line
          x1={PADDING.left}
          y1={HEIGHT - PADDING.bottom}
          x2={WIDTH - PADDING.right}
          y2={HEIGHT - PADDING.bottom}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        <path d={toPath(normalPoints)} fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <path d={toPath(anomalyPoints)} fill="none" stroke="#d97706" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={normalEnd.x} cy={normalEnd.y} r="3" fill="#94a3b8" />
        <circle cx={anomalyEnd.x} cy={anomalyEnd.y} r="3" fill="#d97706" />
        <text x={normalEnd.x + 6} y={normalEnd.y + 3} fontSize="9" fill="#64748b">
          {normalEnd.value}{unit}
        </text>
        <text x={anomalyEnd.x + 6} y={anomalyEnd.y + 3} fontSize="9" fill="#b45309">
          {anomalyEnd.value}{unit}
        </text>
      </svg>
    </div>
  );
};

export default SensorLineChart;
