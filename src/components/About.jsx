import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Heart, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo, statsData, coreValues } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[var(--bg-secondary)]/50 border-y border-[var(--border-color)]">
      <div className="container">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>01 / THE PERSON BEHIND THE CODE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-main)] tracking-tight">
            Making the web <br />
            <span className="gradient-text">feel a little more human.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Photo Container Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="h-full glass-card p-4 relative overflow-hidden flex flex-col justify-between">
              <div className="w-full h-[380px] sm:h-[440px] rounded-xl overflow-hidden relative">
                <img
                  src={personalInfo.aboutImage}
                  alt="Naveed outdoors"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                  A LITTLE ABOUT ME <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Story & Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between gap-8"
          >
            <div className="glass-card p-8 flex flex-col gap-6">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                {personalInfo.aboutParagraph1}
              </p>
              <p className="text-base text-[var(--text-subtle)] leading-relaxed">
                {personalInfo.aboutParagraph2}
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 hover:text-indigo-500 transition-colors group"
                >
                  <span>A project in mind? Let’s talk</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 text-center flex flex-col items-center justify-center border border-[var(--border-color)]"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-cyan-500 mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-[var(--text-subtle)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreValues.map((val) => (
                <div key={val.id} className="p-5 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-500">{val.id}</span>
                  <h4 className="text-sm font-bold text-[var(--text-main)]">{val.title}</h4>
                  <p className="text-xs text-[var(--text-subtle)] leading-normal">{val.desc}</p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
