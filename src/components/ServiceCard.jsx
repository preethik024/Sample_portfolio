import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor, Layout, Rocket, Zap,
  Check,
} from 'lucide-react';

const iconMap = { monitor: Monitor, layout: Layout, rocket: Rocket, zap: Zap };

const ServiceCard = ({ service, index }) => {
  const { title, icon, description, deliverables } = service;
  const Icon = iconMap[icon] || Monitor;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-7 bg-bg-card rounded-2xl card-border card-border-hover h-full"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-violet/0 to-transparent group-hover:via-accent-violet/50 transition-all duration-500" />

      {/* Icon */}
      <div className="mb-5 inline-flex">
        <div className="p-3 rounded-xl bg-accent-violet/10 border border-accent-violet/20 text-accent-violet group-hover:bg-accent-violet/15 group-hover:scale-105 transition-all duration-300">
          <Icon size={22} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-display font-bold text-text-primary mb-3 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5">{description}</p>

      {/* Deliverables */}
      <ul className="flex flex-col gap-2 mt-auto" aria-label={`Deliverables for ${title}`}>
        {deliverables.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center">
              <Check size={10} className="text-accent-violet" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ServiceCard;
