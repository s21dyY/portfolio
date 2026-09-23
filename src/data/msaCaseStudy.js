export const msaCaseStudy = {
  id: 'msa',
  anchorId: 'case-study-msa',

  title: 'MSA Safety — Refrigerant Leak Detection',

  role: 'Corporate Startup Lab · Data Scientist',

  summary:
    'Developed a machine learning pipeline to explore whether patterns in multi-sensor HVAC data could help identify refrigerant leak behavior earlier.',

  tags: [
    'Python',
    'Machine Learning',
    'Time-Series',
    'Feature Engineering',
    'Classification',
  ],

  problem:
    'Refrigerant leaks may not be discovered until refrigerant has already escaped. Our team explored whether changes in HVAC operating behavior could provide an earlier indication of a potential leak.',

  challenge: [
    {
      title: 'New technical domain',
      description:
        'Our team began without HVAC domain expertise, so we first had to understand refrigeration-system behavior before deciding which signals could be useful for modeling.',
    },
    {
      title: 'Complex sensor data',
      description:
        'The project combined multiple sensor sources collected at different intervals, requiring careful cleaning and temporal alignment before modeling.',
    },
    {
      title: 'Changing operating conditions',
      description:
        'HVAC behavior changes with environmental and operating conditions, making it difficult to distinguish potential leak behavior from normal variation.',
    },
  ],

  approach: [
    {
      number: '01',
      title: 'Understand the domain',
      description:
        'Studied existing research, HVAC system behavior, and available detection approaches while incorporating feedback from domain experts.',
    },
    {
      number: '02',
      title: 'Build the data pipeline',
      description:
        'Developed a reusable Python pipeline to clean, align, and combine multiple streams of time-series sensor data.',
    },
    {
      number: '03',
      title: 'Engineer meaningful signals',
      description:
        'Transformed raw sensor readings into domain-informed and temporal features designed to capture changes in system behavior.',
    },
    {
      number: '04',
      title: 'Model and evaluate',
      description:
        'Compared classification approaches and feature configurations using metrics that reflected both predictive performance and the operational cost of false alarms.',
    },
  ],

  featureEngineering: {
    title: 'From raw readings to system behavior',
    description:
      'Instead of relying only on individual sensor values, I engineered features that represented relationships and changes across the HVAC system.',
    groups: [
      {
        title: 'System Signals',
        examples: ['Temperature', 'Pressure', 'Energy demand', 'Equipment state'],
      },
      {
        title: 'Domain Features',
        examples: [
          'Thermodynamic relationships',
          'Pressure / temperature relationships',
          'Efficiency indicators',
          'Normalized operating signals',
        ],
      },
      {
        title: 'Temporal Features',
        examples: ['Rolling statistics', 'Lagged observations', 'Rate of change', 'Historical comparisons'],
      },
    ],
  },

  failureAnalysis: {
    eyebrow: 'The most important lesson',
    title: 'When model performance dropped, the problem was not necessarily the model.',
    description:
      'During evaluation, model performance varied substantially across operating periods. Investigation showed that environmental and seasonal changes could shift sensor behavior enough to resemble the patterns associated with a leak.',
    flow: [
      {
        title: 'Unexpected result',
        description: 'A model that worked under one set of operating conditions generalized poorly to another.',
      },
      {
        title: 'Investigate',
        description: 'Compared sensor behavior across time periods instead of immediately increasing model complexity.',
      },
      {
        title: 'Diagnose',
        description: 'Identified changing environmental conditions as a confounding factor in the sensor distributions.',
      },
      {
        title: 'Redesign',
        description: 'Explored normalization and seasonally comparable baselines as ways to make the detection approach more robust.',
      },
    ],
    takeaway:
      'The experience reinforced that improving an ML system often requires understanding the data-generating process, not simply choosing a more complex model.',
  },

  evaluation: {
    title: 'Evaluating for real-world use',
    description:
      'Because excessive false alarms would reduce trust in a detection system, we evaluated models using multiple metrics rather than optimizing overall accuracy alone.',
    metrics: ['Discrimination', 'Precision', 'Recall', 'F1', 'False-alarm behavior'],
  },

  result: {
    title: 'Outcome',
    description:
      'The project delivered a working proof-of-concept pipeline and demonstrated that HVAC sensor behavior can contain useful leak-related signals, while also identifying environmental confounding as an important limitation for future development.',
    note: 'Specific system details, data characteristics, and performance results are omitted due to project confidentiality.',
  },

  takeaway: {
    title: 'What I learned',
    description:
      'The hardest part was not selecting a classifier. It was understanding how physical-system behavior, environmental conditions, and sensor data interact — and designing an ML pipeline that could distinguish meaningful anomalies from normal variation.',
  },
};

// Synthetic values only — do not represent MSA Safety data. See `disclaimer`,
// which is rendered prominently wherever this is used.
export const msaDemo = {
  label: 'Watch It Work',
  title: 'A synthetic leak event, detected step by step',
  description:
    'This replays a simplified sensor stream through the same pipeline stages described above, using synthetic data designed to illustrate the approach — not real sensor readings.',
  disclaimer:
    'Synthetic values are used below to demonstrate the modeling approach. They do not represent MSA Safety data.',
  stages: ['Ingest', 'Align', 'Engineer', 'Classify', 'Alert'],
  normal: [
    { time: '10:00', pressure: 42, temperature: 68 },
    { time: '10:04', pressure: 42, temperature: 68 },
    { time: '10:08', pressure: 41, temperature: 69 },
    { time: '10:12', pressure: 42, temperature: 68 },
    { time: '10:16', pressure: 41, temperature: 69 },
    { time: '10:20', pressure: 42, temperature: 68 },
  ],
  anomaly: [
    { time: '10:00', pressure: 42, temperature: 68, risk: 0.04 },
    { time: '10:04', pressure: 41, temperature: 69, risk: 0.07 },
    { time: '10:08', pressure: 40, temperature: 70, risk: 0.16 },
    { time: '10:12', pressure: 38, temperature: 72, risk: 0.34 },
    { time: '10:16', pressure: 36, temperature: 75, risk: 0.61 },
    { time: '10:20', pressure: 33, temperature: 78, risk: 0.89 },
  ],
};
