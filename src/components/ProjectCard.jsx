import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const { title, description, tags, category, demoUrl, codeUrl, color, gradient } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-bg-card rounded-2xl overflow-hidden card-border card-border-hover"
    >
      {/* Thumbnail */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Abstract pattern */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${color}50 0%, transparent 70%)`,
          }}
        />
        {/* Project category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}30` }}
          >
            {category}
          </span>
        </div>
        {/* Hover links overlay */}
        <div className="absolute inset-0 bg-bg-primary/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-accent-violet rounded-xl text-white text-sm font-semibold shadow-lg"
          >
            <ExternalLink size={15} />
            Live Demo
          </motion.a>
          <motion.a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-semibold backdrop-blur-sm"
          >
            <Github size={15} />
            Code
          </motion.a>
        </div>
        {/* Decorative code-like lines */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 opacity-30">
          {[80, 55, 70, 40].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full"
              style={{ width: `${w}px`, backgroundColor: color }}
            />
          ))}
        </div>
        {/* Large project initial */}
        <div
          className="absolute -right-4 -top-4 text-8xl font-black opacity-10 select-none font-display"
          style={{ color }}
        >
          {title.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-text-muted border border-white/6"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/6">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-accent-violet transition-colors duration-200"
            aria-label={`Live demo for ${title}`}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <span className="text-white/10">·</span>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label={`Source code for ${title}`}
          >
            <Github size={13} />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
