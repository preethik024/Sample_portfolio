import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/portfolioData';

const Services = () => {
  return (
    <section id="services" className="relative section-padding" aria-label="Services">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary/25 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Services"
          title="What I Can"
          titleHighlight="Do For You"
          description="I offer a focused set of frontend services to help bring your digital vision to life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 relative overflow-hidden rounded-2xl border border-accent-violet/20 bg-gradient-to-br from-accent-violet/10 to-accent-cyan/5 p-8 sm:p-10 text-center">
          {/* Ambient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-violet/15 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
              Ready to start your project?
            </h3>
            <p className="text-text-secondary max-w-md">
              Let's collaborate and build something that stands out. Reach out, and let's talk about your vision.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent-violet hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-900/30 hover:shadow-violet-900/50"
            >
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
