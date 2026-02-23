'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionCta = () => {
  const { t } = useLanguage();
  const backgroundImageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&auto=format&q=80"; // Unique: Architecture Detail
  const arrowIconUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/67af1b78eef99645a9f0bfd8_Arrow%206-5.svg?";

  return (
    <div
      className="relative w-full bg-cover bg-center py-28"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            {t('mission.title')}
          </p>
          <h2 className="text-4xl md:text-[44px] font-bold text-white leading-tight mb-8">
            {t('mission.description')}
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-md transition duration-300 hover:bg-primary/90 group">
            {t('mission.cta')}
            <Image
              src={arrowIconUrl}
              alt={t('alt.arrow')}
              width={12}
              height={12}
              className="ml-3 transition-transform duration-300 transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MissionCta;