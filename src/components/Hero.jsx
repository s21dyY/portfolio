import React from 'react';
import Typewriter from 'typewriter-effect';
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
