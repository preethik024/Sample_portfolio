import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const currentSkills = skillCategories.find((c) => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="relative section-padding" aria-label="Skills">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary/30 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Skills"
          title="Technologies I"
          titleHighlight="Work With"
          description="A curated set of modern tools and technologies I use to build great digital products."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => setActiveCategory(id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border
                ${activeCategory === id
                  ? 'bg-accent-violet/20 border-accent-violet/50 text-text-primary'
                  : 'bg-white/3 border-white/8 text-text-secondary hover:text-text-primary hover:border-white/15'
                }`}
              aria-pressed={activeCategory === id}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
        >
          {currentSkills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Bottom highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-bg-card border border-white/8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <p className="text-text-primary font-display font-bold text-lg">Always learning, always growing.</p>
            <p className="text-text-secondary text-sm mt-1">I stay current with the latest frontend trends and tools.</p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            {['React 18', 'Next.js 14', 'TypeScript 5', 'Framer Motion'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
