import React from 'react';

const scrollToId = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => (
  <nav className="fixed top-0 bg-slate-50 left-0 w-full flex justify-between items-center px-6 md:px-[10%] py-6 md:py-10 z-50">
    <div className="text-xl font-bold text-amber-600">
      Sandy Yang
    </div>
    <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
      <a href="#experience" onClick={scrollToId('experience')} className="hover:text-amber-600 transition">Experience</a>
      <a href="#case-study-slb" onClick={scrollToId('case-study-slb')} className="hover:text-amber-600 transition">Case Study</a>
      <a href="#projects" onClick={scrollToId('projects')} className="hover:text-amber-600 transition">Projects</a>
      <a href="mailto:sandy.yang992@gmail.com">
        <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition shadow-md">
          Contact Me
        </button>
      </a>
    </div>
  </nav>
);

export default Navbar;
