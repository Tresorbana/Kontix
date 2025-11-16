'use client';

import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';

const serviceKeys = ['service1', 'service2', 'service3'];
const serviceIcons = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/6874e8d451ee2a9d7c63b529_Vector%20(19)-21.svg?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f29d06e4b0e24e9ff3b0_Vector%20(73)-22.svg?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68a6f29d2d11acf80787b302_Vector%20(74)-23.svg?"
];

const WhatWeDoSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white text-zinc-900 py-20">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <p className="text-sm font-normal text-zinc-500 uppercase tracking-[0.2em] mb-4">
            {t('whatWeDo.tagline')}
          </p>
          <h2 className="text-[36px] font-semibold leading-[1.3] text-zinc-900 max-w-2xl mx-auto">
            {t('whatWeDo.subtitle')}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
          {serviceKeys.map((key, index) => (
            <div
              key={key}
              className={`flex flex-col items-center text-center px-9 pt-4 pb-5 ${
                index > 0 ? 'mt-8 md:mt-0' : ''
              } ${index < serviceKeys.length - 1 ? "md:border-r md:border-zinc-200" : ""}`}
            >
              <div className="w-[70px] h-[70px] flex items-center justify-center">
                <Image
                  src={serviceIcons[index]}
                  alt={t(`whatWeDo.services.${key}.title`)}
                  width={70}
                  height={70}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-zinc-900">
                {t(`whatWeDo.services.${key}.title`)}
              </h3>
              <p className="mt-2 text-base text-zinc-500">
                {t(`whatWeDo.services.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;