import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Layers, Pen, Coffee, ExternalLink, Database, 
  Code, Terminal, Spotlight, MonitorCog, CaseUpper, BarChart3 } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 bg-slate-50 left-0 w-full flex justify-between items-center px-6 md:px-[10%] py-6 md:py-10">
        <div className="text-xl font-bold text-amber-600">Sandy Yang</div>
        <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
          <a href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
          className="hover:text-amber-600 transition">Projects</a>
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
      <header className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-[100px] md:pt-[150px]" id="about">
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
                  strings: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Data Storyteller'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <p className="max-w-2xl mt-6 text-lg text-slate-500 leading-relaxed">
            I build data-driven solutions and translate complex numbers into 
            beautiful, actionable narratives.
          </p>

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
        <SkillBadge icon={<CaseUpper size={18}/>} text="AB Testing" />
        <SkillBadge icon={<MonitorCog size={18}/>} text="Machine Learning" />
      </div>

      {/* Projects*/}
      <section id="projects" className="min-h-screen px-[10%] py-20 bg-slate-50">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What to eat today */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">W</div>
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
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">TypeScript</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">Supabase</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">Groq AI</span>
            </div>
          </div>
          
          {/* Smart Audit */}
          <div className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Layers size={24} />
              </div>
              <div className="flex gap-3 text-slate-400">
                <a href="https://github.com/s21dyY/smart-audit" target="_blank" rel="noreferrer">
                <Github size={20} className="hover:text-slate-900 cursor-pointer" />
                </a>
                <a href="http://smart-audit-frontend.s3-website.us-east-2.amazonaws.com/" target="_blank" rel="noreferrer">
                  <ExternalLink size={20} className="hover:text-slate-900 cursor-pointer" />
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart Audit AI</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              A full-stack AI orchestration engine that generates context-aware audit rules using LLMs. 
              Features a <strong>containerized FastAPI backend</strong> on AWS EC2 and a <strong>decoupled React frontend</strong> 
              hosted on S3, integrated via a custom-tuned CORS policy and cross-platform Docker builds.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold  uppercase">FastAPI & Pydantic</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold  uppercase">Gemini LLM</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">Docker Buildx</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">AWS ECR & EC2</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">S3 Hosting</span>
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
              Real-time analysis of social media trends using BERT models to classify customer sentiment 
              and emotional triggers.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold uppercase">PyTorch</span>
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

export default App;