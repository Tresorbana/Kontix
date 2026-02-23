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
          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="group inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition duration-300 hover:scale-105">
              {t('finalCta.button')}
              <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;