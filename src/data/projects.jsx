import { CookingPot, BarChart3, FileSearch, BriefcaseBusiness } from 'lucide-react';

// SLB (data/slbCaseStudy.js) and MSA Safety (data/msaCaseStudy.js) are the portfolio's
// two featured case studies and live in components/FeaturedWork.jsx instead of this grid.
export const projects = [
  {
    id: 'regrag',
    icon: <FileSearch size={24} />,
    title: 'RegRAG: Cited Answers from Regulations',
    status: 'links',
    githubUrl: 'https://github.com/s21dyY/RAG_QA_Citation',
    description: `A retrieval-augmented QA system that answers questions over 49 CFR Part 192 (US pipeline safety regulations)
      with the exact section cited, or an honest "not found" when the text doesn't cover the question. Chunks
      regulations by section, combines dense embeddings with BM25 in a hybrid retriever, and generates answers
      through a local Ollama model constrained to the retrieved text. Evaluated on a hand-written 40-question
      benchmark for retrieval recall/MRR, citation accuracy, faithfulness, and refusal rate on unanswerable questions.`,
    tags: ['Python', 'FastAPI', 'RAG', 'Hybrid Retrieval (FAISS + BM25)', 'Ollama'],
  },
  {
    id: 'job-finder',
    icon: <BriefcaseBusiness size={24} />,
    title: 'Find Sandy a Job: Automated Job Finder',
    status: 'links',
    githubUrl: 'https://github.com/s21dyY/find-sandy-a-job',
    description: `A scheduled pipeline that checks company job boards every 3 hours and sends me a Discord alert for new-grad
      data roles that fit my resume. It pulls postings from Greenhouse, Lever, Ashby, Workable, Workday, and iCIMS, filters
      them by title, location, and posting age, and uses Claude to give each one a 0–100 fit score. For strong matches it
      tailors my resume to the job description and renders it as a PDF. A check rejects any skill, number, or experience
      that isn't in the original resume. Runs on GitHub Actions or macOS launchd.`,
    tags: ['Python', 'Claude API', 'GitHub Actions', 'Web Scraping', 'Discord Webhooks'],
  },
  {
    id: 'what-to-eat',
    icon: <CookingPot size={24} />,
    title: 'What To Eat Today',
    status: 'links',
    githubUrl: 'https://github.com/s21dyY/what-to-eat-today',
    demoUrl: 'https://what-to-eat-today-six.vercel.app',
    description: `An AI-powered kitchen assistant aimed to solve the "what's for dinner" dilemma. It  tracks pantry inventory and expiration dates, using the Groq LPU to generate instant recipes based on selected ingredients.`,
    tags: ['TypeScript', 'Next.js', 'Supabase', 'Groq AI'],
  },
  {
    id: 'sentiment-analysis',
    icon: <BarChart3 size={24} />,
    title: 'Sentiment Analysis',
    status: 'links',
    githubUrl: 'https://github.com/s21dyY/sentiment-analysis-app',
    demoUrl: 'https://sy-lstm.streamlit.app/',
    description: `This project uses machine learning pipeline to decode the emotional nuances of social media reviews. Using BERT-based sentiment analysis, the tool transforms thousands of unstructured posts into structured data, identifying specific triggers and shifts in public opinion in real-time.`,
    tags: ['BERT', 'NLP', 'LSTM', 'Streamlit'],
  },
];
