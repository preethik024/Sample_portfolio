import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variants = {
    primary:
      'bg-accent-violet hover:bg-violet-500 active:bg-violet-700 text-white shadow-lg shadow-violet-900/30',
    outline:
      'border border-white/10 hover:border-accent-violet/50 hover:bg-accent-violet/10 text-text-primary bg-transparent',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-white/5 bg-transparent',
    gradient:
      'text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:opacity-90 shadow-lg shadow-violet-900/30',
    'border-draw-primary':
      'bg-accent-violet text-white shadow-lg shadow-violet-900/30 btn-border-draw btn-border-draw-violet',
    'border-draw-outline':
      'border border-white/10 text-text-primary bg-transparent btn-border-draw btn-border-draw-outline',
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: disabled || loading ? 1 : 1.03 },
    whileTap: { scale: disabled || loading ? 1 : 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps} {...props}>
        {loading && (
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {loading && (
        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;
