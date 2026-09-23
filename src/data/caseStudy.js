export const slbCaseStudy = {
  id: 'slb',
  anchorId: 'case-study-slb',
  title: 'SLB — V&V Automation Platform',
  role: 'Software Engineer Intern · Jun 2026 – Aug 2026',
  problem: 'Engineers manually generated V&V (verification and validation) test documents for every new product — a repetitive, error-prone process that ate hours better spent on engineering work.',
  engineering: [
    {
      title: 'Configuration-driven architecture',
      detail: 'adaptable to new products with minimal code changes',
    },
    {
      title: 'Shared backend',
      detail: 'one FastAPI layer supports both the local app and the web app',
    },
    {
      title: 'Local LLM (Ollama)',
      detail: 'generates structured V&V plans and reports from product configs',
    },
  ],
  impact: [
    { value: '~50%', label: 'Estimated reduction in document turnaround' },
    { value: '~0.4 FTE', label: 'Estimated engineering effort saved' },
  ],
};
