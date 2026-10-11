import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
  label,
  title,
  titleHighlight,
  description,
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <div className={`flex flex-col gap-4 mb-16 ${alignClass[align]} ${className}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent-violet">
            <span className="block w-5 h-px bg-accent-violet opacity-60" />
            {label}
            <span className="block w-5 h-px bg-accent-violet opacity-60" />
          </span>
        </motion.div>
      )}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-primary leading-tight"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="text-gradient">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>
      {description && (
        <motion.p
          className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
