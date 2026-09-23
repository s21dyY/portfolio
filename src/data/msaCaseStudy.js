export const msaCaseStudy = {
  id: 'msa',
  anchorId: 'case-study-msa',
  title: 'MSA Safety — Refrigerant Leak Detection',
  role: 'Corporate Startup Lab · Data Scientist',
  summary: 'An end-to-end classification pipeline that identifies refrigerant leak behavior from multi-sensor HVAC data, built with a cross-functional team for an industry sponsor.',
  tags: ['Python', 'XGBoost', 'Feature Engineering', 'Classification Modeling'],
  problem: 'HVAC refrigerant leaks are often discovered only after they\'ve already occurred. Our team explored whether sensor data could reveal leak behavior earlier — before a costly failure.',
  challenge: [
    'No HVAC domain expertise on the team',
    'A large, noisy multi-sensor time-series dataset',
    'False alarms would undermine the tool',
  ],
  approach: [
    {
      title: 'Learn the domain',
      description: 'Divided the initial research across the team — studying existing research, market solutions, and HVAC systems, and reaching out to domain experts for context.',
    },
    {
      title: 'Turn the problem into an ML task',
      description: 'Research showed patterns in HVAC sensor data could indicate refrigerant leaks, letting us frame the problem as a supervised classification task.',
    },
    {
      title: 'Build and iterate',
      description: 'Developed the ML pipeline in Python — cleaning the sensor data, engineering features, comparing modeling approaches, and tuning XGBoost.',
    },
    {
      title: 'Evaluate what mattered',
      description: 'Evaluated not just overall accuracy but false positives, since unnecessary maintenance alerts would reduce the tool\'s usefulness in practice.',
    },
  ],
  pipeline: [
    'Sensor Data',
    'Cleaning',
    'Feature Engineering',
    'Train / Validate',
    'XGBoost',
    'Leak Prediction',
  ],
  result: [
    { value: '80%', label: 'Classification accuracy' },
    { value: '10%', label: 'False-positive rate' },
  ],
};
