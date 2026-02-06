import React from 'react';
import Header from '../components/portfolio/Header';
import HeroCard from '../components/portfolio/HeroCard';
import Skills from '../components/portfolio/Skills';
import ExperienceCard from '../components/portfolio/ExperienceCard';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import SectionCard from '../components/portfolio/SectionCard';
import ContactCard from '../components/portfolio/ContactCard';
import Footer from '../components/portfolio/Footer';
import ChatHead from '../components/portfolio/ChatHead';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-min">
          {/* Hero - spans 2 columns on larger screens */}
          <HeroCard />
          
          {/* Skills Card */}
          <Skills />
          
          {/* Section Cards */}
          <SectionCard sectionIndex={1} />
          <SectionCard sectionIndex={2} />
          <SectionCard sectionIndex={3} />
          
          {/* Experience - spans 2 columns */}
          <ExperienceCard />
          
          {/* Contact */}
          <ContactCard />
          
          {/* Projects Grid - full width */}
          <ProjectsGrid />
        </div>
      </main>
      
      <Footer />
      
      {/* Chat Head */}
      <ChatHead />
    </div>
  );
}