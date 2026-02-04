import React from 'react';
import { motion } from 'framer-motion';

export default function InfoCard({ 
  children, 
  className = '', 
  delay = 0,
  id
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}