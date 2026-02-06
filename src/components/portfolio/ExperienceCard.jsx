import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import InfoCard from './InfoCard';
import  portfolioData  from './PortfolioData';

export default function ExperienceCard() {
  const { experience } = portfolioData;

  return (
    <InfoCard delay={0.2} className="col-span-1 md:col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600">
          <Briefcase className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Experience</h2>
      </div>
      
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-6 border-l-2 border-blue-200 last:border-l-blue-100"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
            
            <div className="pb-6 last:pb-0">
              <h3 className="text-lg font-semibold text-slate-800">{exp.title}</h3>
              
              <div className="flex flex-wrap items-center gap-3 mt-1 mb-3">
                <span className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-medium">
                  <Building2 className="w-3.5 h-3.5" />
                  {exp.company}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </InfoCard>
  );
}