import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Server, Cpu, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>02 / TOOLS I WORK WITH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-main)] tracking-tight">
              A growing <span className="gradient-text">toolkit.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[var(--bg-tertiary)] p-1.5 rounded-2xl border border-[var(--border-color)]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-white shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeTab === cat.id
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col justify-between relative group border border-[var(--border-color)] hover:border-cyan-500/50"
              >
                <div>
                  {/* Symbol & Number Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/20">
                      {category.symbol}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-subtle)]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[var(--text-main)] mb-3">
                    {category.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-main)] hover:border-cyan-500/40 transition-colors"
                      >
                        <CheckCircle className="w-3 h-3 text-cyan-500" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border-color)] mt-4 flex items-center justify-between text-xs text-[var(--text-subtle)] font-mono">
                  <span>ACTIVELY BUILDING</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
