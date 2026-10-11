import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="relative section-padding overflow-hidden" aria-label="Projects">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-violet/4 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Selected Work"
          title="Projects I've"
          titleHighlight="Built"
          description="A selection of projects focused on design, performance, and meaningful user experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-white/4 text-sm font-medium transition-all duration-200"
          >
            View more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
