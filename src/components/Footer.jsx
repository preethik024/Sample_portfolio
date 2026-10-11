import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { developerInfo, socialLinks } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-bg-secondary border-t border-white/6">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-violet-cyan flex items-center justify-center text-white font-black text-sm font-display">
                {developerInfo.initials}
              </div>
              <span className="text-text-primary font-display font-bold text-lg">{developerInfo.name}</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Building digital experiences that are fast, accessible, and beautiful.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, url, icon }) => {
                const Icon = iconMap[icon] || Mail;
                return (
                  <motion.a
                    key={label}
                    href={url}
                    target={url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl border border-white/8 text-text-secondary hover:text-accent-violet hover:border-accent-violet/40 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-display font-semibold text-sm tracking-wide uppercase">Navigation</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-secondary text-sm hover:text-accent-violet transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-display font-semibold text-sm tracking-wide uppercase">Get in Touch</h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${developerInfo.email}`}
                className="text-text-secondary text-sm hover:text-accent-violet transition-colors duration-200 break-all"
              >
                {developerInfo.email}
              </a>
              <p className="text-text-muted text-sm">{developerInfo.location}</p>
              <p className="text-sm text-emerald-400 flex items-center gap-1.5 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                {developerInfo.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/6">
          <p className="text-text-muted text-sm text-center sm:text-left">
            © {year} {developerInfo.name}. Crafted with care.
          </p>
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 text-text-secondary hover:text-accent-violet hover:border-accent-violet/40 text-sm transition-all duration-200"
          >
            <ArrowUp size={14} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
