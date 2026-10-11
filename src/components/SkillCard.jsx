import React from 'react';
import { motion } from 'framer-motion';

// Icon representations using colored emoji/text for visual interest without external deps
const iconColors = {
  html: '#E34F26',
  css: '#1572B6',
  js: '#F7DF1E',
  react: '#61DAFB',
  tailwind: '#06B6D4',
  ts: '#3178C6',
  next: '#F5F5F5',
  framer: '#0055FF',
  git: '#F05032',
  github: '#F5F5F7',
  vscode: '#007ACC',
  figma: '#F24E1E',
  vite: '#646CFF',
  node: '#339933',
  api: '#8B5CF6',
  responsive: '#22D3EE',
};

const iconLabels = {
  html: 'H5',
  css: 'C3',
  js: 'JS',
  react: 'Re',
  tailwind: 'Tw',
  ts: 'TS',
  next: 'Nx',
  framer: 'Fr',
  git: 'Gt',
  github: 'GH',
  vscode: 'VS',
  figma: 'Fg',
  vite: 'Vi',
  node: 'No',
  api: 'AP',
  responsive: 'RD',
};

const SkillCard = ({ skill, index }) => {
  const { name, icon } = skill;
  const color = iconColors[icon] || '#8B5CF6';
  const label = iconLabels[icon] || name.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-bg-card card-border cursor-default
        hover:border-white/15 hover:bg-white/3 transition-all duration-200"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black transition-transform duration-200 group-hover:scale-110"
        style={{
          backgroundColor: `${color}18`,
          border: `1px solid ${color}30`,
          color,
          fontFamily: 'Manrope, Inter, sans-serif',
        }}
      >
        {label}
      </div>
      <span className="text-xs font-medium text-text-secondary text-center leading-tight">{name}</span>
    </motion.div>
  );
};

export default SkillCard;
