import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDownRight, ChevronDown, Code, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-mesh">
      {/* Glow Orbs in Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-xs font-semibold tracking-wider text-[var(--text-subtle)] uppercase mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Main Animated Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading tracking-tight leading-[1.1] text-[var(--text-main)] mb-6">
              Ideas into <br />
              <span className="gradient-text relative inline-block">
                web experiences.
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-xl mb-8 leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a href="#work" className="btn-primary">
                <span>Explore my work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.cvUrl}
                download="Naveed-Ahmad-CV.pdf"
                className="btn-secondary"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Micro Badge / Quote */}
            <div className="flex items-center gap-3 pt-6 border-t border-[var(--border-color)] text-xs font-mono text-[var(--text-subtle)]">
              <span className="w-6 h-[2px] bg-cyan-500 rounded-full" />
              <span>Design-minded. Code-focused. Always learning.</span>
            </div>
          </motion.div>

          {/* Right Portrait & Visual Orbit Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-indigo-500/20 animate-spin-reverse pointer-events-none" />
              
              {/* Orbiting Sparkle Dots */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 p-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--accent-cyan)] shadow-md animate-float">
                <Code className="w-4 h-4 text-cyan-500" />
              </div>

              <div className="absolute -bottom-2 right-1/4 p-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--accent-violet)] shadow-md animate-float" style={{ animationDelay: '1.5s' }}>
                <Terminal className="w-4 h-4 text-purple-500" />
              </div>

              {/* Central Glass Portrait Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden glass-card p-2.5 shadow-2xl border border-[var(--border-color)] group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Name Tag overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                    <div>
                      <h4 className="text-xs font-bold">{personalInfo.name}</h4>
                      <p className="text-[9px] text-cyan-400 font-mono tracking-wider">FRONT-END DEVELOPER</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-bold text-[10px]">
                      N
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pb-4 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-[var(--text-subtle)] hover:text-cyan-500 transition-colors group"
        >
          <div className="p-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] group-hover:border-cyan-500 group-hover:translate-y-1 transition-all">
            <ChevronDown className="w-4 h-4" />
          </div>
          <span>SCROLL TO EXPLORE</span>
        </a>
      </div>
    </section>
  );
};
