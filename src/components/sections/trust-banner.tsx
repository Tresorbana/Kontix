import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustBanner = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-background py-20 md:py-[100px]">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[1.5px] text-primary">
            {t('trustBanner.title')}
          </p>
        </div>
        <h2 className="max-w-[700px] text-3xl font-semibold leading-tight text-foreground md:text-[40px] md:leading-[1.4]">
          {t('trustBanner.description')}
        </h2>
      </div>
    </section>
  );
};

export default TrustBanner;