'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const { t } = useLanguage();
  return (
    <div
      className="relative bg-cover bg-center py-24 sm:py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507679799987-c7377ec48696?w=1600&h=900&fit=crop&auto=format&q=80')", // Ultra-stable professional executive abstract (No faces)
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-widest text-primary">
            {t('finalCta.tagline')}
          </p>
          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {t('finalCta.title')}
          </h2>
          <div className="mt-12 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
            <form className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cta-name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t('contact.name')}
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="cta-email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cta-company" className="block text-sm font-medium text-gray-300 mb-1.5">
                  {t('contact.company')}
                </label>
                <input
                  id="cta-company"
                  name="company"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="cta-message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  {t('contact.message')}
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-primary py-4 px-8 text-base font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] group"
              >
                {t('contact.submit')}
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;