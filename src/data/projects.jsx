import { Cpu, Snowflake, CookingPot, BarChart3, FileSearch } from 'lucide-react';

export const projects = [
  {
    icon: <FileSearch size={24} />,
    title: 'RegRAG: Cited Answers from Regulations',
    status: 'in-progress',
    description: `A retrieval-augmented QA system that answers questions over 49 CFR Part 192 (US pipeline safety regulations)
      with the exact section cited, or an honest "not found" when the text doesn't cover the question. Chunks
      regulations by section, combines dense embeddings with BM25 in a hybrid retriever, and generates answers
      through a local Ollama model constrained to the retrieved text. Evaluated on a hand-written 40-question
      benchmark for retrieval recall/MRR, citation accuracy, faithfulness, and refusal rate on unanswerable questions.`,
    tags: ['Python', 'FastAPI', 'RAG', 'Hybrid Retrieval (FAISS + BM25)', 'Ollama'],
  },
  {
    icon: <Cpu size={24} />,
    title: 'Reservoir Performance Automation',
    status: 'nda',
    description: `Built during my Software Engineer internship at SLB (Schlumberger). Designed a configuration-driven
      automation platform that turns engineering requirements into standardized test plans and reports,
      with a locally-hosted LLM generating structured documentation to cut a manual planning process from
      roughly 16 hours down to a fraction of that. Internal workflows, data, and proprietary logic are
      covered under a signed NDA and aren't shown here.`,
    tags: ['Python', 'LLM Integration', 'Ollama', 'Workflow Automation'],
  },
  {
    icon: <Snowflake size={24} />,
    title: 'Refrigerant Leak Detection',
    status: 'nda',
    description: `Partnered with an industry sponsor through CMU's Corporate Startup Lab as the data scientist on a cross-functional team. Built an end-to-end classification pipeline in Python, including cleaning multi-sensor time-series data, engineering features to capture leak signatures, and iterating on model selection and hyperparameters. Reaching 80% classification accuracy while cutting false positives to 10%, reducing unnecessary maintenance callouts.`,
    tags: ['Python', 'Feature Engineering', 'Classification Modeling', 'Predictive Modeling'],
  },
  {
    icon: <CookingPot size={24} />,
    title: 'What To Eat Today',
    status: 'links',
    githubUrl: 'https://github.com/s21dyY/what-to-eat-today',
    demoUrl: 'https://what-to-eat-today-six.vercel.app',
    description: `An AI-powered kitchen assistant aimed to solve the "what's for dinner" dilemma. It  tracks pantry inventory and expiration dates, using the Groq LPU to generate instant recipes based on selected ingredients.`,
    tags: ['TypeScript', 'Next.js', 'Supabase', 'Groq AI'],
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Sentiment Analysis',
    status: 'links',
    githubUrl: 'https://github.com/s21dyY/sentiment-analysis-app',
    demoUrl: 'https://sy-lstm.streamlit.app/',
    description: `This project uses machine learning pipeline to decode the emotional nuances of social media reviews. Using BERT-based sentiment analysis, the tool transforms thousands of unstructured posts into structured data, identifying specific triggers and shifts in public opinion in real-time.`,
    tags: ['BERT', 'NLP', 'LSTM', 'Streamlit'],
  },
];
