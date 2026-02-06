import React from 'react';
import  portfolioData  from './PortfolioData';

export default function Footer() {
  const { name } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm">
          © {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}