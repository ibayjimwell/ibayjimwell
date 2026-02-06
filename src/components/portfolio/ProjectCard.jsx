import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col justify-between bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-200 hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} case study`}
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden border border-blue-100">
            {project.icon ? (
              <img 
                src={project.icon} 
                alt={`${project.title} icon`}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <Layers className="w-6 h-6 text-blue-500" style={{ display: project.icon ? 'none' : 'block' }} />
          </div>
          
          <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 text-xs font-medium">
            {project.slug}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors focus:outline-none focus:underline"
          aria-label={`Visit ${project.title} live site`}
        >
          <ExternalLink className="w-4 h-4" />
          Live
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-sm text-slate-600 font-medium hover:text-slate-800 transition-colors focus:outline-none focus:underline"
          aria-label={`View ${project.title} source code`}
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      </div>
    </motion.article>
  );
}