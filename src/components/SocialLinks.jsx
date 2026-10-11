import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

const SocialLinks = ({ className = '', iconSize = 18, direction = 'row', showLabel = false }) => {
  return (
    <div
      className={`flex gap-3 ${direction === 'col' ? 'flex-col' : 'flex-row'} ${className}`}
      role="list"
      aria-label="Social links"
    >
      {socialLinks.map(({ label, url, icon }, i) => {
        const Icon = iconMap[icon] || Mail;
        return (
          <motion.a
            key={label}
            href={url}
            target={url.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            role="listitem"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 p-2.5 rounded-xl border border-white/8 bg-white/4 
              text-text-secondary hover:text-accent-violet hover:border-accent-violet/40 hover:bg-accent-violet/8
              transition-all duration-200`}
          >
            <Icon size={iconSize} />
            {showLabel && <span className="text-sm font-medium">{label}</span>}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
