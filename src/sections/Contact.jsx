import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

// WhatsApp SVG icon (not in lucide-react)
const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { developerInfo, socialLinks } from '../data/portfolioData';

// ─── Form validation ───────────────────────────────────────────────────────────
const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Your name is required.';
  else if (fields.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!fields.email.trim()) errors.email = 'Your email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Please enter a valid email address.';

  if (!fields.subject.trim()) errors.subject = 'Subject is required.';

  if (!fields.message.trim()) errors.message = 'A message is required.';
  else if (fields.message.trim().length < 20) errors.message = 'Please write at least 20 characters.';

  return errors;
};

const INITIAL_FIELDS = { name: '', email: '', subject: '', message: '' };

// ─── FormField ─────────────────────────────────────────────────────────────────
const FormField = ({ label, id, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-text-primary">
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-1.5 text-xs text-red-400"
        >
          <AlertCircle size={12} />
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const inputCls = (hasError) =>
  `w-full px-4 py-3 rounded-xl bg-bg-card border text-text-primary text-sm placeholder:text-text-muted
   focus:outline-none focus:ring-2 focus:ring-accent-violet/50 focus:border-accent-violet/50 transition-all duration-200
   ${hasError ? 'border-red-500/60' : 'border-white/8 hover:border-white/15'}`;

const Contact = () => {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    // Clear error on change if already touched
    if (touched[name]) {
      const newErrors = validate({ ...fields, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  }, [fields, touched]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  }, [fields]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const allTouched = Object.fromEntries(Object.keys(INITIAL_FIELDS).map((k) => [k, true]));
      setTouched(allTouched);
      const validationErrors = validate(fields);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) return;

      setStatus('loading');

      // ─────────────────────────────────────────────────────────────────────────
      // INTEGRATION POINT:
      // To connect a real email service, replace the block below with your
      // preferred integration. Options:
      //   1. EmailJS  → emailjs.sendForm(serviceId, templateId, form, publicKey)
      //   2. Formspree → fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', ... })
      //   3. Resend / SendGrid → call your own API route
      //
      // For now, a mailto: fallback opens the user's email client.
      // ─────────────────────────────────────────────────────────────────────────
      try {
        await new Promise((res) => setTimeout(res, 600)); // Simulated UX delay
        const mailtoUrl = `mailto:${developerInfo.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(
          `Hi, I'm ${fields.name}.\n\n${fields.message}\n\nReply to: ${fields.email}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus('success');
        setFields(INITIAL_FIELDS);
        setTouched({});
        setErrors({});
      } catch {
        setStatus('error');
      }
    },
    [fields]
  );

  return (
    <section id="contact" className="relative section-padding overflow-hidden" aria-label="Contact">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary/20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-violet/6 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Contact"
          title="Have a Project in Mind?"
          titleHighlight="Let's Build Something Great."
          description="Tell me about your idea, and let's explore how we can bring it to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-text-primary font-display font-bold text-xl">Let's Connect</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I'm currently taking on new freelance projects and collaborations. Reach out, and I'll
                get back to you as soon as possible.
              </p>
            </div>

            {/* Email + WhatsApp */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${developerInfo.email}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-bg-card hover:border-accent-violet/40 hover:bg-accent-violet/5 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-accent-violet/10 text-accent-violet group-hover:bg-accent-violet/20 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-text-muted text-xs mb-0.5">Email</p>
                  <p className="text-text-primary text-sm font-medium break-all">{developerInfo.email}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-bg-card hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <WhatsAppIcon size={18} />
                </div>
                <div>
                  <p className="text-text-muted text-xs mb-0.5">WhatsApp</p>
                  <p className="text-text-primary text-sm font-medium">+91 98765 43210</p>
                </div>
              </a>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-emerald-400 text-sm font-semibold">Currently Available</p>
                <p className="text-text-muted text-xs mt-0.5">Typically responds within 24h</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-5 p-10 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 text-center min-h-[400px]"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-display font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                      Your email client has opened with your message pre-filled. I'll reply as soon as possible!
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-accent-violet text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-white/8 bg-bg-card"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Your Name" id="name" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={fields.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputCls(!!errors.name)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                    </FormField>
                    <FormField label="Email Address" id="email" error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@example.com"
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputCls(!!errors.email)}
                        aria-invalid={!!errors.email}
                      />
                    </FormField>
                  </div>

                  <FormField label="Subject" id="subject" error={errors.subject}>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project inquiry — e.g. Landing Page Development"
                      value={fields.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputCls(!!errors.subject)}
                      aria-invalid={!!errors.subject}
                    />
                  </FormField>

                  <FormField label="Message" id="message" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, and budget…"
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputCls(!!errors.message)} resize-none`}
                      aria-invalid={!!errors.message}
                    />
                  </FormField>

                  {status === 'error' && (
                    <p className="flex items-center gap-2 text-sm text-red-400">
                      <AlertCircle size={15} />
                      Something went wrong. Please try emailing directly instead.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    loading={status === 'loading'}
                    disabled={status === 'loading'}
                    className="self-start"
                  >
                    <Send size={16} />
                    Send Enquiry
                  </Button>

                  <p className="text-text-muted text-xs">
                    This will open your email client with the message pre-filled. Alternatively, email me directly at{' '}
                    <a href={`mailto:${developerInfo.email}`} className="text-accent-violet hover:underline">
                      {developerInfo.email}
                    </a>
                    .
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
