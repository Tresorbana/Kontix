'use client';

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Lock, Gem } from 'lucide-react';

const luxuryKeys = ['precision', 'discretion', 'permanence'];
const luxuryIcons = [Target, Lock, Gem];

const WhatWeDoSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white text-zinc-900 py-20">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <p className="text-sm font-normal text-zinc-500 uppercase tracking-[0.2em] mb-4">
            {t('luxury.tagline')}
          </p>
          <h2 className="text-[36px] font-semibold leading-[1.3] text-zinc-900 max-w-2xl mx-auto">
            {t('luxury.title')}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
          {luxuryKeys.map((key, index) => (
            <div
              key={key}
              className={`flex flex-col items-center text-center px-9 pt-4 pb-5 ${index > 0 ? 'mt-8 md:mt-0' : ''
                } ${index < luxuryKeys.length - 1 ? "md:border-r md:border-zinc-200" : ""}`}
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary/5 rounded-full mb-2">
                {React.createElement(luxuryIcons[index], {
                  className: "w-8 h-8 text-primary stroke-[1.5]",
                  "aria-hidden": "true"
                })}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-zinc-900">
                {t(`luxury.items.${key}.title`)}
              </h3>
              <p className="mt-2 text-base text-zinc-500">
                {t(`luxury.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;