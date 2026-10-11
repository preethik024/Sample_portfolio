import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { developerInfo } from '../data/portfolioData';
import GlowHorizon from '../components/GlowHorizon';

// Floating tech badge component
const TechBadge = ({ label, color, delay, style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    style={style}
    className="absolute px-3 py-1.5 rounded-xl border border-white/10 bg-bg-secondary/80 backdrop-blur-md text-xs font-semibold flex items-center gap-2 shadow-lg"
  >
    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
    {label}
  </motion.div>
);

// Abstract developer illustration
const HeroVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center select-none">
    {/* Main orb */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-accent-violet/15"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-accent-cyan/10 border-dashed"
    />

    {/* Central card */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative z-10 w-56 h-64 md:w-64 md:h-72 bg-bg-card rounded-2xl border border-white/10 shadow-card overflow-hidden flex flex-col"
    >
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-4 pt-4 pb-3 border-b border-white/6">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-auto text-xs text-text-muted font-mono">portfolio.jsx</span>
      </div>
      {/* Code lines */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-2 font-mono text-xs">
        <div className="flex gap-2">
          <span className="text-accent-violet">const</span>
          <span className="text-accent-cyan">Developer</span>
          <span className="text-text-muted">= {'{'}</span>
        </div>
        <div className="flex gap-2 pl-4">
          <span className="text-text-secondary">name:</span>
          <span className="text-emerald-400">'{developerInfo.shortName}'</span>
          <span className="text-text-muted">,</span>
        </div>
        <div className="flex gap-2 pl-4">
          <span className="text-text-secondary">role:</span>
          <span className="text-yellow-400">'Full-Stack'</span>
        </div>
        <div className="flex gap-2 pl-4">
          <span className="text-text-secondary">stack:</span>
          <span className="text-accent-cyan">['React']</span>
        </div>
        <div className="flex gap-2 pl-4">
          <span className="text-text-secondary">open:</span>
          <span className="text-emerald-400">true</span>
        </div>
        <div className="text-text-muted">{'}'}</div>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-text-muted">//</span>
          <span className="text-accent-violet">Explore now</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-4 bg-accent-violet rounded-sm"
          />
        </div>
      </div>
    </motion.div>

    {/* Floating badges */}
    <TechBadge label="React" color="#61DAFB" delay={1.0} style={{ top: '8%', right: '-8%' }} />
    <TechBadge label="Tailwind" color="#06B6D4" delay={1.2} style={{ top: '35%', left: '-15%' }} />
    <TechBadge label="Framer" color="#0055FF" delay={1.4} style={{ bottom: '18%', right: '-14%' }} />
    <TechBadge label="⚡ 98 Perf" color="#F59E0B" delay={1.6} style={{ bottom: '8%', left: '-10%' }} />
  </div>
);

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Glow horizon — sweeps in from top */}
      <div className="absolute inset-x-0 top-0 h-[420px] overflow-hidden pointer-events-none" aria-hidden>
        <GlowHorizon variant="top" className="opacity-30" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-violet/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-cyan/6 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 pt-20 pb-12 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text content */}
          <motion.div
            className="flex flex-col gap-6 lg:gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Availability badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-emerald-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {developerInfo.availability}
              </span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.div variants={item} className="flex flex-col gap-2">
              <p className="text-text-secondary text-lg font-medium">
                Hi, I'm <span className="text-text-primary font-semibold">{developerInfo.name}</span> 👋
              </p>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl xl:text-6xl font-display font-black leading-[1.1] text-text-primary"
            >
              I Build{' '}
              <span className="text-gradient">Digital Experiences</span>{' '}
              That Make an Impact.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              variants={item}
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg"
            >
              I craft fast, accessible, responsive, and visually engaging websites —
              turning ideas into thoughtful interfaces that users love.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <Button variant="border-draw-primary" size="lg" onClick={scrollToWork}>
                <Sparkles size={16} />
                View My Work
              </Button>
              <Button variant="border-draw-outline" size="lg" onClick={scrollToContact}>
                Let's Talk
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex flex-wrap gap-6 pt-2">
              {developerInfo.stats.map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-display font-black text-gradient">{value}</span>
                  <span className="text-text-muted text-xs mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={item}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[500px]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToWork}
        aria-label="Scroll down to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-violet transition-colors duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
