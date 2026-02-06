import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import InfoCard from './InfoCard';
import  portfolioData  from './PortfolioData';

const skillColors = {
  Javascript: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Typescript: 'bg-blue-100 text-blue-700 border-blue-200',
  Python: 'bg-green-100 text-green-700 border-green-200',
  HTML: 'bg-orange-100 text-orange-700 border-orange-200',
  CSS: 'bg-purple-100 text-purple-700 border-purple-200',
  Tailwind: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  React: 'bg-sky-100 text-sky-700 border-sky-200',
  Next: 'bg-slate-100 text-slate-700 border-slate-200',
  Express: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Django: 'bg-green-100 text-green-800 border-green-200',
  PostgreSQL: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  MongoDB: 'bg-green-100 text-green-700 border-green-200',
  Git: 'bg-red-100 text-red-700 border-red-200',
  Docker: 'bg-blue-100 text-blue-600 border-blue-200',
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <InfoCard delay={0.1}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600">
          <Code2 className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Skills & Tech</h2>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${skillColors[skill] || 'bg-slate-100 text-slate-700 border-slate-200'} transition-transform hover:scale-105`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </InfoCard>
  );
}