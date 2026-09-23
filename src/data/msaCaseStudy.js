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
  // Kept intentionally generic where the specific technique isn't confirmed —
  // e.g. no claim of class balancing or a named alternate model. See TODOs below
  // for what would sharpen this section further once confirmed.
  pipelineSteps: [
    {
      title: 'Explore',
      description: 'Studied the raw multi-sensor HVAC time-series readings to understand what leak behavior looked like before building anything.',
    },
    {
      title: 'Prepare',
      description: 'Cleaned the sensor readings and engineered features to capture leak signatures ahead of training.',
    },
    {
      title: 'Model',
      description: 'Compared model types and tuned hyperparameters, settling on an XGBoost classifier for the final pipeline.',
    },
  ],
  result: [
    { value: '80%', label: 'Classification accuracy' },
    { value: '10%', label: 'False-positive rate' },
  ],
  resultNote: 'A model that detects leaks but generates too many false alarms isn\'t useful operationally, so we evaluated false-positive behavior alongside overall accuracy — not accuracy in isolation.',
};
