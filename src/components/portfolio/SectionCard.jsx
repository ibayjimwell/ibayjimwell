import React from 'react';
import { Server, Monitor, Database, Wrench } from 'lucide-react';
import InfoCard from './InfoCard';
import  portfolioData  from './PortfolioData';

const sectionIcons = {
  "Backend Development": Server,
  "Frontend Development": Monitor,
  "Databases & DevOps": Database,
  "Languages & Tools": Wrench,
};

export default function SectionCard({ sectionIndex }) {
  const { sections } = portfolioData;
  const section = sections[sectionIndex];
  
  if (!section || section.title === "About Me") return null;
  
  const Icon = sectionIcons[section.title] || Wrench;

  return (
    <InfoCard delay={0.1 + sectionIndex * 0.05}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-lg font-bold text-slate-800">{section.title}</h2>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed">
        {section.content}
      </p>
    </InfoCard>
  );
}