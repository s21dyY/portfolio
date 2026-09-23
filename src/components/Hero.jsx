import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Pen } from 'lucide-react';

const Hero = () => (
  <header className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-[100px] md:pt-[150px]" id="hero">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-7xl font-extrabold mb-4">
        Hi, I'm <span className="text-amber-600">Sandy!</span>
      </h1>

      <p className="text-2xl md:text-3xl font-bold text-slate-900">Software Engineer</p>
      <p className="text-lg md:text-xl font-semibold text-amber-600 mt-2">
        Python · Backend · APIs · Full Stack
      </p>

      <p className="max-w-2xl mt-6 text-lg text-slate-500 leading-relaxed">
        With experience applying AI/ML to real engineering problems.
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
);

export default Hero;
