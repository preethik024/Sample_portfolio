import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { developerInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden" aria-label="About me">
      {/* Subtle top gradient fade from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/30 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual / Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Portrait placeholder */}
              <div className="relative w-full aspect-square max-w-xs mx-auto rounded-3xl overflow-hidden bg-bg-card border border-white/8 shadow-card">
                {/* Abstract profile art */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 via-bg-card to-accent-cyan/10" />
                <div className="absolute inset-0 bg-grid opacity-40" />
                {/* Large initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-28 h-28 rounded-full bg-gradient-violet-cyan flex items-center justify-center text-5xl font-black text-white font-display shadow-violet-glow">
                      {developerInfo.initials}
                    </div>
                    <div className="text-center">
                      <p className="text-text-primary font-display font-bold text-lg">{developerInfo.name}</p>
                      <p className="text-text-muted text-sm mt-1">{developerInfo.title}</p>
                    </div>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent-violet/15 rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent-cyan/10 rounded-tr-3xl" />
              </div>

              {/* Floating stats card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-bg-card border border-white/10 rounded-2xl px-4 py-3 shadow-card"
              >
                <p className="text-xs text-text-muted mb-1">Projects Done</p>
                <p className="text-2xl font-display font-black text-gradient">30+</p>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -left-4 sm:-left-8 bg-bg-card border border-emerald-500/30 rounded-xl px-3 py-2 shadow-card flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <SectionHeading
              label="About Me"
              title="Enhancing the  Ideas Into"
              titleHighlight="Visual Digital Products"
              align="left"
            />

            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-secondary leading-relaxed"
              >
                {developerInfo.bio1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-text-secondary leading-relaxed"
              >
                {developerInfo.bio2}
              </motion.p>
            </div>

            {/* Strengths */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              aria-label="Core strengths"
            >
              {developerInfo.strengths.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center">
                    <Check size={11} className="text-accent-violet" />
                  </span>
                  {s}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="outline" size="lg" href={developerInfo.resumeUrl} aria-label="Download resume">
                <Download size={16} />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
