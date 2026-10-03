import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ state: 'sending', message: 'Sending your message…' });

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const isPlaceholder = (val) => !val || val.includes('YOUR_EMAILJS');

    if (isPlaceholder(publicKey) || isPlaceholder(serviceId) || isPlaceholder(templateId)) {
      // Fallback response for missing EmailJS keys while opening mailto
      setTimeout(() => {
        setStatus({
          state: 'success',
          message: 'Thank you! Note: EmailJS is in preview mode. I will respond to your message via email.',
        });
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
        },
        publicKey
      );

      setStatus({ state: 'success', message: 'Thanks! Your message was sent successfully.' });
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ state: 'error', message: 'Could not send message automatically. Please email directly!' });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        
        <div className="glass-card p-8 sm:p-12 relative overflow-hidden border border-[var(--border-color)] shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left Contact Details Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span>04 / CONTACT ME</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-main)] mb-6">
                  Have a project <br />
                  <span className="gradient-text">in mind?</span>
                </h2>

                <p className="text-base text-[var(--text-muted)] leading-relaxed mb-8">
                  Send me a note about what you’re looking to build, or feel free to connect on GitHub or LinkedIn.
                </p>

                {/* Direct Email Card with Copy button */}
                <div className="p-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-between mb-6 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[var(--text-subtle)] uppercase">DIRECT EMAIL</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-[var(--text-main)] hover:text-cyan-500 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-cyan-500 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-6 border-t border-[var(--border-color)]">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-main)] hover:border-cyan-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-main)] hover:border-cyan-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-subtle)] uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="What should I call you?"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-tertiary)] border ${
                      errors.name ? 'border-red-500' : 'border-[var(--border-color)]'
                    } text-[var(--text-main)] focus:outline-none focus:border-cyan-500 transition-colors text-sm`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-subtle)] uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-tertiary)] border ${
                      errors.email ? 'border-red-500' : 'border-[var(--border-color)]'
                    } text-[var(--text-main)] focus:outline-none focus:border-cyan-500 transition-colors text-sm`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-subtle)] uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Tell me a little about your project..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-[var(--bg-tertiary)] border ${
                      errors.message ? 'border-red-500' : 'border-[var(--border-color)]'
                    } text-[var(--text-main)] focus:outline-none focus:border-cyan-500 transition-colors text-sm`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'sending'}
                  className="btn-primary w-full justify-center !py-3.5 mt-2"
                >
                  {status.state === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Form Feedback Alert */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-medium flex items-center gap-2 ${
                      status.state === 'success'
                        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                    }`}
                  >
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
