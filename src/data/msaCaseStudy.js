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

  technicalPipeline: [
    {
      number: '01',
      title: 'Ingest',
      description: 'Load and validate multiple sources of HVAC sensor and detection data.',
    },
    {
      number: '02',
      title: 'Align',
      description: 'Synchronize sensor streams collected at different frequencies onto a common time axis.',
    },
    {
      number: '03',
      title: 'Engineer',
      description: 'Create domain-informed features from relationships among temperature, pressure, energy use, and other operating signals.',
    },
    {
      number: '04',
      title: 'Transform',
      description: 'Generate rolling statistics, lagged values, and change-based features to capture temporal behavior.',
    },
    {
      number: '05',
      title: 'Model',
      description: 'Evaluate classification models across multiple feature configurations and operating conditions.',
    },
    {
      number: '06',
      title: 'Evaluate',
      description: 'Analyze discrimination, precision/recall tradeoffs, and false-alarm behavior rather than relying on a single accuracy metric.',
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
  label: 'Simplified Example',
  disclaimer:
    'Synthetic values are used below to demonstrate the modeling approach. They do not represent MSA Safety data.',
  normal: [
    { time: '10:00', pressure: 42, temperature: 68 },
    { time: '10:05', pressure: 42, temperature: 69 },
    { time: '10:10', pressure: 41, temperature: 68 },
    { time: '10:15', pressure: 42, temperature: 69 },
    { time: '10:20', pressure: 41, temperature: 68 },
  ],
  anomaly: [
    { time: '10:00', pressure: 42, temperature: 68 },
    { time: '10:05', pressure: 41, temperature: 69 },
    { time: '10:10', pressure: 40, temperature: 70 },
    { time: '10:15', pressure: 37, temperature: 73 },
    { time: '10:20', pressure: 35, temperature: 76 },
  ],
  pipeline: ['Raw sensor streams', 'Temporal alignment', 'Feature engineering', 'Classification', 'Anomaly signal'],
};
