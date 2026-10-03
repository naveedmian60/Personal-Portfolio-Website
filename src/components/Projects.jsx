import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, Layers, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Web Design'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 relative bg-[var(--bg-secondary)]/40 border-y border-[var(--border-color)]">
      <div className="container">
        
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>03 / SELECTED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-main)] tracking-tight">
              My <span className="gradient-text">work.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[var(--bg-tertiary)] p-1.5 rounded-2xl border border-[var(--border-color)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Stack / Grid */}
        <div className="flex flex-col gap-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[var(--border-color)] hover:border-cyan-500/40 group"
              >
                {/* Image Preview Container (7 cols) - Centered & Contained */}
                <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-slate-900 group-hover:shadow-2xl transition-all flex items-center justify-center">
                  <div className="relative aspect-[16/10] w-full overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                    
                    {/* Project Index Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-400 z-10">
                      PROJECT {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white z-10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details Container (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-500 uppercase tracking-wider mb-2">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>SELECTED WORK</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-main)] mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono text-[var(--text-subtle)] mb-2.5 uppercase">TECHNOLOGIES USED</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-main)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Link Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color)]">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !py-2.5 !px-5 text-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !py-2.5 !px-5 text-xs"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};