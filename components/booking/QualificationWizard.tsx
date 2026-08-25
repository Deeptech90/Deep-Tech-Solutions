'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { qualificationSchema } from '@/lib/validations/lead';
import type { QualificationFormData } from '@/lib/types/funnel';
import CalEmbedWrapper from './CalEmbedWrapper';

// ── Cal.com event link ─────────────────────────────────────────────────────────
// Update NEXT_PUBLIC_CAL_LINK in .env.local to override, e.g.
// NEXT_PUBLIC_CAL_LINK=yourname/30min
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || 'deeptech';
// ──────────────────────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type WizardStep = 1 | 2 | 3 | 4;

const SERVICE_OPTIONS = [
  {
    id: 'website' as const,
    label: 'Website Design & Engineering',
    desc: 'High-converting custom digital platform',
  },
  {
    id: 'local_seo' as const,
    label: 'Local Search & Google Maps SEO',
    desc: 'Rank #1 in regional search results',
  },
  {
    id: 'lead_gen' as const,
    label: 'Inbound Lead Engine',
    desc: 'Convert search traffic into phone calls & bookings',
  },
  {
    id: 'full_package' as const,
    label: 'Complete System (Website + SEO + Leads)',
    desc: 'End-to-end client acquisition pipeline',
  },
  {
    id: 'custom_app' as const,
    label: 'Custom App / System Integration',
    desc: 'Tailored software or workflow automation',
  },
] as const;

const INDUSTRY_OPTIONS = [
  {
    id: 'dental' as const,
    label: 'Healthcare & Dental Practice',
    desc: 'Clinics, dentists, medical specialists',
  },
  {
    id: 'legal' as const,
    label: 'Legal Practice & Law Firms',
    desc: 'Attorneys, legal consultants, partners',
  },
  {
    id: 'restaurant' as const,
    label: 'Restaurant & Hospitality',
    desc: 'Dining establishments, cafes, venues',
  },
  {
    id: 'home_services' as const,
    label: 'Home Services & Contractors',
    desc: 'HVAC, plumbing, electrical, construction',
  },
  {
    id: 'other' as const,
    label: 'Other Commercial Entity',
    desc: 'B2B services, retail, technology',
  },
] as const;

const BUDGET_OPTIONS = [
  {
    id: 'under_500' as const,
    label: '< $500',
    desc: 'Standard setup or initial audit',
  },
  {
    id: '500_1000' as const,
    label: '$500 – $1,000',
    desc: 'Growth website foundation',
  },
  {
    id: '1000_2500' as const,
    label: '$1,000 – $2,500',
    desc: 'Full custom site + lead acquisition engine',
  },
  {
    id: 'above_2500' as const,
    label: '$2,500+',
    desc: 'Enterprise deployment or recurring retainer',
  },
] as const;

const STEP_LABELS = [
  'Service Objective',
  'Industry Sector',
  'Capital Allocation',
  'Contact Details',
];

export default function QualificationWizard() {
  const [step, setStep] = useState<WizardStep>(1);
  const [qualifiedData, setQualifiedData] = useState<QualificationFormData | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const wizardRef = React.useRef<HTMLDivElement>(null);

  const scrollToWizardTop = () => {
    if (wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<QualificationFormData>({
    resolver: zodResolver(qualificationSchema),
    mode: 'onChange',
  });

  const nextStep = async (fields: (keyof QualificationFormData)[]) => {
    const valid = await trigger(fields);
    if (valid) {
      setStep((s) => (s + 1) as WizardStep);
      setTimeout(scrollToWizardTop, 50);
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1) as WizardStep);
    setTimeout(scrollToWizardTop, 50);
  };

  const onFinalSubmit = (data: QualificationFormData) => {
    setQualifiedData(data);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.45, ease: EASE },
    },
    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -24,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.3 },
    },
  };

  if (qualifiedData) {
    return (
      <div className="wizard" ref={wizardRef}>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="wizard__success-banner"
        >
          <span className="wizard__success-icon" aria-hidden="true">✓</span>
          <div>
            <h4 className="wizard__success-title">Lead Qualification Confirmed</h4>
            <p className="wizard__success-desc">
              Your business details have been attached. Select an open 30-minute
              consultation slot on the calendar below.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <CalEmbedWrapper calLink={CAL_LINK} formData={qualifiedData} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="wizard" ref={wizardRef}>
      {/* Progress header */}
      <div className="wizard__progress-header">
        <span className="wizard__progress-label">
          Qualification Phase {step} of 4 &mdash; {STEP_LABELS[step - 1]}
        </span>
        <span className="wizard__progress-pct">{Math.round((step / 4) * 100)}% Completed</span>
      </div>
      <div className="wizard__progress-track" aria-hidden="true">
        <motion.div
          className="wizard__progress-fill"
          animate={{ width: `${(step / 4) * 100}%` }}
          transition={{ duration: 0.4, ease: EASE }}
        />
      </div>

      {/* Step indicators */}
      <div className="wizard__steps" aria-label="Progress steps">
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={`wizard__step-dot${i + 1 <= step ? ' active' : ''}${i + 1 === step ? ' current' : ''}`}
            aria-label={`Step ${i + 1}: ${label}${i + 1 < step ? ' (completed)' : i + 1 === step ? ' (current)' : ''}`}
          >
            <span className="wizard__step-num">
              {i + 1 < step ? '✓' : i + 1}
            </span>
            <span className="wizard__step-label">{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onFinalSubmit)}>
        <AnimatePresence mode="wait">
          {/* STEP 1: Service Need */}
          {step === 1 && (
            <motion.div
              key="step-1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="wizard__step"
            >
              <div className="wizard__step-header">
                <span className="wizard__step-icon" aria-hidden="true">🎯</span>
                <h3 className="wizard__step-title">Select your primary business objective</h3>
              </div>
              <div className="wizard__radio-grid">
                {SERVICE_OPTIONS.map((item) => (
                  <label key={item.id} className="wizard__radio-card" id={`service-${item.id}`}>
                    <div className="wizard__radio-card-top">
                      <span className="wizard__radio-card-label">{item.label}</span>
                      <input
                        type="radio"
                        value={item.id}
                        {...register('serviceNeed')}
                        className="wizard__radio-input"
                        aria-label={item.label}
                      />
                    </div>
                    <span className="wizard__radio-card-desc">{item.desc}</span>
                  </label>
                ))}
              </div>
              {errors.serviceNeed && (
                <p className="wizard__error" role="alert">{errors.serviceNeed.message}</p>
              )}
              <div className="wizard__nav wizard__nav--end">
                <button
                  type="button"
                  id="wizard-step1-next"
                  onClick={() => nextStep(['serviceNeed'])}
                  className="btn btn-primary"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Industry */}
          {step === 2 && (
            <motion.div
              key="step-2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="wizard__step"
            >
              <div className="wizard__step-header">
                <span className="wizard__step-icon" aria-hidden="true">🏢</span>
                <h3 className="wizard__step-title">What industry does your business operate in?</h3>
              </div>
              <div className="wizard__radio-grid">
                {INDUSTRY_OPTIONS.map((item) => (
                  <label key={item.id} className="wizard__radio-card" id={`industry-${item.id}`}>
                    <div className="wizard__radio-card-top">
                      <span className="wizard__radio-card-label">{item.label}</span>
                      <input
                        type="radio"
                        value={item.id}
                        {...register('industryVertical')}
                        className="wizard__radio-input"
                        aria-label={item.label}
                      />
                    </div>
                    <span className="wizard__radio-card-desc">{item.desc}</span>
                  </label>
                ))}
              </div>
              {errors.industryVertical && (
                <p className="wizard__error" role="alert">{errors.industryVertical.message}</p>
              )}
              <div className="wizard__nav">
                <button type="button" onClick={prevStep} className="btn btn-ghost">
                  ← Back
                </button>
                <button
                  type="button"
                  id="wizard-step2-next"
                  onClick={() => nextStep(['industryVertical'])}
                  className="btn btn-primary"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Budget */}
          {step === 3 && (
            <motion.div
              key="step-3"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="wizard__step"
            >
              <div className="wizard__step-header">
                <span className="wizard__step-icon" aria-hidden="true">💰</span>
                <h3 className="wizard__step-title">Select project budget allocation</h3>
              </div>
              <div className="wizard__radio-grid wizard__radio-grid--2col">
                {BUDGET_OPTIONS.map((item) => (
                  <label key={item.id} className="wizard__radio-card" id={`budget-${item.id}`}>
                    <div className="wizard__radio-card-top">
                      <span className="wizard__radio-card-label">{item.label}</span>
                      <input
                        type="radio"
                        value={item.id}
                        {...register('budgetTier')}
                        className="wizard__radio-input"
                        aria-label={item.label}
                      />
                    </div>
                    <span className="wizard__radio-card-desc">{item.desc}</span>
                  </label>
                ))}
              </div>
              {errors.budgetTier && (
                <p className="wizard__error" role="alert">{errors.budgetTier.message}</p>
              )}
              <div className="wizard__nav">
                <button type="button" onClick={prevStep} className="btn btn-ghost">
                  ← Back
                </button>
                <button
                  type="button"
                  id="wizard-step3-next"
                  onClick={() => nextStep(['budgetTier'])}
                  className="btn btn-primary"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Contact Details */}
          {step === 4 && (
            <motion.div
              key="step-4"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="wizard__step"
            >
              <div className="wizard__step-header">
                <span className="wizard__step-icon" aria-hidden="true">💼</span>
                <h3 className="wizard__step-title">Enter contact details for calendar unlock</h3>
              </div>

              <div className="wizard__contact-grid">
                <div className="wizard__field">
                  <label htmlFor="wiz-fullName" className="wizard__label">Full Name *</label>
                  <input
                    id="wiz-fullName"
                    {...register('fullName')}
                    className={`wizard__input${errors.fullName ? ' wizard__input--error' : ''}`}
                    placeholder="e.g., Dr. Sarah Jenkins"
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <p className="wizard__field-error" role="alert">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="wizard__field">
                  <label htmlFor="wiz-businessName" className="wizard__label">Company / Practice Name *</label>
                  <input
                    id="wiz-businessName"
                    {...register('businessName')}
                    className={`wizard__input${errors.businessName ? ' wizard__input--error' : ''}`}
                    placeholder="e.g., Apex Dental Studio"
                    autoComplete="organization"
                  />
                  {errors.businessName && (
                    <p className="wizard__field-error" role="alert">{errors.businessName.message}</p>
                  )}
                </div>

                <div className="wizard__field">
                  <label htmlFor="wiz-email" className="wizard__label">Corporate Email Address *</label>
                  <input
                    id="wiz-email"
                    type="email"
                    {...register('email')}
                    className={`wizard__input${errors.email ? ' wizard__input--error' : ''}`}
                    placeholder="sarah@apexdental.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="wizard__field-error" role="alert">{errors.email.message}</p>
                  )}
                </div>

                <div className="wizard__field">
                  <label htmlFor="wiz-phone" className="wizard__label">WhatsApp / Direct Phone *</label>
                  <input
                    id="wiz-phone"
                    {...register('phone')}
                    className={`wizard__input${errors.phone ? ' wizard__input--error' : ''}`}
                    placeholder="+1 (555) 234-5678"
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className="wizard__field-error" role="alert">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="wizard__field">
                <label htmlFor="wiz-websiteUrl" className="wizard__label">
                  Current Website Domain <span className="wizard__label-optional">(Optional)</span>
                </label>
                <input
                  id="wiz-websiteUrl"
                  {...register('websiteUrl')}
                  className={`wizard__input${errors.websiteUrl ? ' wizard__input--error' : ''}`}
                  placeholder="https://apexdental.com"
                  autoComplete="url"
                />
                {errors.websiteUrl && (
                  <p className="wizard__field-error" role="alert">{errors.websiteUrl.message}</p>
                )}
              </div>

              <div className="wizard__field">
                <label htmlFor="wiz-projectBrief" className="wizard__label">
                  Primary Project Challenge or Objective *
                </label>
                <textarea
                  id="wiz-projectBrief"
                  {...register('projectBrief')}
                  rows={4}
                  className={`wizard__input wizard__textarea${errors.projectBrief ? ' wizard__input--error' : ''}`}
                  placeholder="Summarize your current online lead generation bottlenecks and what success looks like..."
                />
                {errors.projectBrief && (
                  <p className="wizard__field-error" role="alert">{errors.projectBrief.message}</p>
                )}
              </div>

              <div className="wizard__nav">
                <button type="button" onClick={prevStep} className="btn btn-ghost">
                  ← Back
                </button>
                <button
                  type="submit"
                  id="wizard-step4-submit"
                  className="btn btn-primary wizard__submit-btn"
                >
                  📅 Unlock Consultation Calendar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
