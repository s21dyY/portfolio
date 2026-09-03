import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Mail, Layers, Pen, Coffee, ExternalLink, Database,
  Code, Terminal, Spotlight, MonitorCog, CaseUpper, BarChart3, CookingPot,
  Lock, Cpu, Snowflake, Briefcase } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 bg-slate-50 left-0 w-full flex justify-between items-center px-6 md:px-[10%] py-6 md:py-10 z-50">
        <div className="text-xl font-bold text-amber-600">
          Sandy Yang
        </div>
        <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
          <a href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
          className="hover:text-amber-600 transition">Projects</a>
          <a href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
              }}
          className="hover:text-amber-600 transition">Experience</a>
          <a href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}          
             className="text-black-600 hover:text-amber-600 transition">About</a>
          <a href="mailto:sandy.yang992@gmail.com">
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition shadow-md">
              Contact Me
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-[100px] md:pt-[150px]" id="hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4">
            Hi, I'm <span className="text-amber-600">Sandy!</span>
          </h1>
          
          <div className="text-2xl md:text-3xl flex gap-3 justify-center text-slate-600 h-10">
            <span>I am a </span>
            <span className="font-bold text-slate-900">
              <Typewriter
                options={{
                  strings: ['ML Engineer', 'Data Scientist', 'Data Storyteller'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <p className="max-w-2xl mt-6 text-lg text-slate-500 leading-relaxed">
            I help turn messy data and workflows into tools people
            actually use.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <a href="/Resume_Sandy_Yang.pdf" target="_blank" rel="noreferrer">
              <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition shadow-md font-medium">
                View Resume
              </button>
            </a>
            <a href="mailto:sandy.yang992@gmail.com">
              <button className="border border-slate-300 text-slate-700 px-6 py-2.5 rounded-full hover:border-amber-600 hover:text-amber-600 transition font-medium">
                Contact Me
              </button>
            </a>
          </div>

          <div className="flex gap-6 justify-center mt-8">
            <a href="https://github.com/s21dyY" target="_blank" rel="noreferrer">
              <Github className="cursor-pointer text-slate-400 hover:text-amber-600 transition" />
            </a>
            <a href="https://www.linkedin.com/in/sandy-yang-538b12193/" target="_blank" rel="noreferrer">
              <Linkedin className="cursor-pointer text-slate-400 hover:text-amber-600 transition" />
            </a>
            <a href="mailto:sandy.yang992@gmail.com">
              <Mail className="cursor-pointer text-slate-400 hover:text-amber-600 transition" />
            </a>
            <a href="https://medium.com/@sandy.yang992" target="_blank" rel="noreferrer">
              <Pen className="cursor-pointer text-slate-400 hover:text-amber-600 transition" />
            </a>
          </div>
        </motion.div>
      </header>

      {/* Skills Row */}
      <div className="flex flex-wrap justify-center gap-3 px-6 pb-20 pt-10 max-w-4xl mx-auto">
        <SkillBadge icon={<Database size={18}/>} text="SQL" />
        <SkillBadge icon={<Code size={18}/>} text="Python" />
        <SkillBadge icon={<Terminal size={18}/>} text="PyTorch"/>
        <SkillBadge icon={<Terminal size={18}/>} text="TensorFlow"/>
        <SkillBadge icon={<Coffee size={18}/>} text="Java" />
        <SkillBadge icon={<Spotlight size={18}/>} text="Power BI" />
         <SkillBadge icon={<Cpu size={18}/>} text="Distributed Systems" />
        <SkillBadge icon={<CaseUpper size={18}/>} text="AB Testing" />
        <SkillBadge icon={<MonitorCog size={18}/>} text="Machine Learning" />
      </div>

      {/* Experience */}
      <section id="experience" className="px-[10%] py-20 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">Experience</h2>

        <div className="relative border-l-2 border-slate-100 ml-3">
          <ExperienceItem
            title="Software Engineer Intern"
            org="SLB (Schlumberger)"
            location="Sugar Land, TX"
            dates="Jun 2026 – Aug 2026"
            bullets={[
              'Developed end-to-end automation software for the Reservoir Performance Team, streamlining test planning and reporting.',
              'Automated a 16-hour VV planning workflow, targeting a 50% reduction in processing time and 0.4 FTE in labor savings.',
              'Integrated a locally hosted LLM (Ollama) into the backend to generate structured plans and reports.',
              'Designed a configuration-driven architecture to improve scalability and maintainability across future products.',
            ]}
          />
          <ExperienceItem
            title="Data Analyst"
            org="WTW"
            location="Taipei, Taiwan"
            dates="Feb 2023 – Oct 2024"
            bullets={[
              'Built end-to-end data pipelines supporting monthly retraining of attrition prediction models.',
              'Optimized ETL workflows in partnership with data engineers, reducing operational costs by $2K per month.',
              'Built Power BI dashboards tracking attrition and compensation benchmarks, cutting reporting time by 2 hrs/week.',
              'Synthesized market and social media analytics into actionable insights to support client strategy.',
            ]}
          />
          <ExperienceItem
            title="Data Analyst"
            org="Pengo Technology Inc"
            location="Taipei, Taiwan"
            dates="Dec 2021 – Dec 2022"
            bullets={[
              'Developed ETL pipelines to ingest REST API data into SQL databases, enabling reliable downstream reporting.',
              'Built Power BI dashboards tracking conversion rates and funnel drop-offs, enabling PMs to prioritize features.',
              'Designed and analyzed A/B experiments to evaluate feature performance and inform product prioritization.',
              'Automated reporting workflows, reducing manual work by 10 hours per week.',
            ]}
            isLast
          />
        </div>
      </section>

      {/* Projects*/}
      <section id="projects" className="min-h-screen px-[10%] py-20 bg-slate-50">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* SLB Reservoir Performance Automation — NDA-covered */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Cpu size={24} />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400" title="Confidential — covered under NDA">
                <Lock size={16} />
                <span className="text-xs font-semibold uppercase tracking-wide">NDA</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Reservoir Performance Automation</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Built during my Software Engineer internship at SLB (Schlumberger). Designed a configuration-driven
              automation platform that turns engineering requirements into standardized test plans and reports,
              with a locally-hosted LLM generating structured documentation to cut a manual planning process from
              roughly 16 hours down to a fraction of that. Internal workflows, data, and proprietary logic are
              covered under a signed NDA and aren't shown here.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Python</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">LLM Integration</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Ollama</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Workflow Automation</span>
            </div>
          </div>

          {/* Refrigerant Leak Detection — NDA-covered */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Snowflake size={24} />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400" title="Confidential — covered under NDA">
                <Lock size={16} />
                <span className="text-xs font-semibold uppercase tracking-wide">NDA</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Refrigerant Leak Detection</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Partnered with an industry sponsor through CMU's Corporate Startup Lab as the data scientist on a cross-functional team. Built an end-to-end classification pipeline in Python, including cleaning multi-sensor time-series data, engineering features to capture leak signatures, and iterating on model selection and hyperparameters. Reaching 80% classification accuracy while cutting false positives to 10%, reducing unnecessary maintenance callouts.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Python</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Feature Engineering</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Classification Modeling</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Predictive Modeling</span>
            </div>
          </div>
          {/* What to eat today */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                 <CookingPot size={24} />
              </div>
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/s21dyY/what-to-eat-today" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                  <Github size={20} className="hover:text-slate-900 cursor-pointer" />
                </a>
                <a href="https://what-to-eat-today-six.vercel.app" target="_blank" rel="noreferrer" aria-label="Live Demo">
                  <ExternalLink size={20} className="hover:text-slate-900 cursor-pointer" />
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">What To Eat Today</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              An AI-powered kitchen assistant aimed to solve the "what's for dinner" dilemma. It  tracks pantry inventory and expiration dates, using the Groq LPU to generate instant recipes based on selected ingredients.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">TypeScript</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Supabase</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Groq AI</span>
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <BarChart3 size={24} />
              </div>
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/s21dyY/sentiment-analysis-app" target="_blank" rel="noreferrer">
                  <Github size={20} className="hover:text-slate-900 cursor-pointer"/>
                </a>
                <a href="https://sy-lstm.streamlit.app/" target="_blank" rel="noreferrer"> 
                  <ExternalLink size={20} className="hover:text-slate-900 cursor-pointer" />
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sentiment Analysis</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              This project uses machine learning pipeline to decode the emotional nuances of social media reviews. Using BERT-based sentiment analysis, the tool transforms thousands of unstructured posts into structured data, identifying specific triggers and shifts in public opinion in real-time.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">BERT</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">NLP</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">LSTM</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Streamlit</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Reusable Skill Badge Component
const SkillBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-slate-100 font-semibold text-sm hover:shadow-md transition">
    <span className="text-amber-500">{icon}</span>
    {text}
  </div>
);

// Reusable Experience Timeline Item
const ExperienceItem = ({ title, org, location, dates, bullets, isLast }) => (
  <div className={`relative pl-10 ${isLast ? '' : 'pb-12'}`}>
    <span className="absolute -left-[9px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-amber-600 ring-4 ring-white" />
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
        <Briefcase size={18} className="text-amber-600" />
        {title}
      </h3>
      <span className="text-sm font-medium text-slate-400">{dates}</span>
    </div>
    <p className="text-slate-500 font-medium mb-3">{org} · {location}</p>
    <ul className="space-y-1.5">
      {bullets.map((b, i) => (
        <li key={i} className="text-slate-600 leading-relaxed flex gap-2">
          <span className="text-amber-600 mt-1">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default App;
