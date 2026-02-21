'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';


const QualityConstruction = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-background text-foreground py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[480px] lg:h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1620052581237-5d36667be337?w=800&h=800&fit=crop&auto=format&q=80"
              alt={t('alt.meeting')}
              width={314}
              height={434}
              className="absolute top-0 left-0 w-3/4 max-w-[314px] rounded-2xl object-cover z-10"
            />
            <Image
              src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=800&h=800&fit=crop&auto=format&q=80"
              alt={t('alt.collaboration')}
              width={313}
              height={311}
              className="absolute bottom-0 right-0 w-3/4 max-w-[313px] rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-primary text-sm font-semibold tracking-[1.4px] uppercase mb-4">
              {t('quality.sectionTitle')}
            </p>
            <h2 className="text-4xl lg:text-[40px] font-semibold text-foreground leading-tight lg:leading-[52px]">
              {t('quality.title')}
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-300">
              {t('quality.description')}
            </p>

            <div className="mt-10 pt-10 border-t border-border space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-1 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t('about.features.experience.title')}
                  </h3>
                  <p className="text-white/70">{t('about.features.experience.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-1 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t('about.features.personalized.title')}
                  </h3>
                  <p className="text-white/70">{t('about.features.personalized.description')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityConstruction;