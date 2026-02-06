import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import  portfolioData  from './PortfolioData';

export default function HeroCard() {
  const { fullname, profession, sections } = portfolioData;
  const aboutSection = sections.find(s => s.title === "About Me");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
    >
      <div className="relative h-full min-h-[320px] rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-8 md:p-10 overflow-hidden shadow-2xl shadow-blue-500/25">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Available for projects</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              {fullname}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 font-medium mb-6">
              {profession}
            </p>
            
            <p className="text-blue-100/80 text-base md:text-lg max-w-xl leading-relaxed">
              {aboutSection?.content}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}