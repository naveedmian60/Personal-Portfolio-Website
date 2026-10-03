import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-2 text-lg font-bold font-heading text-[var(--text-main)]">
          <span className="p-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span>{personalInfo.shortName}</span>
          <span className="text-cyan-500">.</span>
        </div>

        {/* Center Copyright */}
        <p className="text-xs text-[var(--text-subtle)] text-center">
          © {new Date().getFullYear()} Built with care by {personalInfo.name}. All rights reserved.
        </p>

        {/* Right Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-main)] hover:border-cyan-500 transition-all group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
