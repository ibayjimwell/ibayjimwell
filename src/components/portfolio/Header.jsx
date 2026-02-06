import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import  portfolioData  from './PortfolioData';

export default function Header() {
  const { name, linkedin, github, email, cv } = portfolioData;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-lg">JI</span>
            </div>
            <span className="font-semibold text-slate-800 hidden sm:block">{name}</span>
          </div>
          
          <nav className="flex items-center gap-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2.5 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Download CV"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">CV</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}