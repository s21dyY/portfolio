import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section id="projects" className="min-h-screen px-[10%] py-20 bg-slate-50">
    <h2 className="text-4xl font-bold mb-12 text-slate-900">Featured Projects</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
