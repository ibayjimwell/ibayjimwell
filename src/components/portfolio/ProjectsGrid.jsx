import React, { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import  portfolioData  from './PortfolioData';

export default function ProjectsGrid() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="col-span-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600">
            <FolderOpen className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}