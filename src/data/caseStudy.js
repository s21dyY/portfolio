export const slbCaseStudy = {
  id: 'slb',
  anchorId: 'case-study-slb',
  title: 'SLB — V&V Automation Platform',
  role: 'Software Engineer Intern · Jun 2026 – Aug 2026',
  summary: 'A configuration-driven automation platform that turns engineering requirements into standardized V&V test plans and reports, with a locally-hosted LLM generating the documentation.',
  tags: ['Python', 'FastAPI', 'Ollama', 'Workflow Automation'],
  problem: 'Engineers manually generated V&V (verification and validation) test documents for every new product — a repetitive, error-prone process that ate hours better spent on engineering work.',
  challenge: "I started without a complete specification for how the automation tool should work. The existing V&V process also varied across products, so building around a single workflow would make the solution difficult to reuse.",
  approach: [
    {
      title: 'Understand the workflow',
      description: 'Studied the existing V&V process and engineering documents to understand what could be standardized and automated.',
    },
    {
      title: 'Learn from the users',
      description: 'Worked with engineers throughout development to understand pain points, clarify requirements, and iteratively refine the solution.',
    },
    {
      title: 'Design for change',
      description: "Instead of hard-coding one product's workflow, built a configuration-driven architecture so the system could adapt to different products and evolving requirements with minimal code changes.",
    },
  ],
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
