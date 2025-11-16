'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { MagneticHover } from '@/components/animations/AdvancedAnimations';

interface Service {
  key: string;
  imageUrl: string;
  link: string;
}

const servicesData: Service[] = [
  {
    key: 'processes',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    link: '#'
  },
  {
    key: 'corporate',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    link: '#'
  },
  {
    key: 'structure',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    link: '#'
  },
  {
    key: 'portfolio',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    link: '#'
  },
  {
    key: 'global',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    link: '#'
  },
  {
    key: 'banking',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    link: '#'
  }
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-5">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <p className="text-sm font-semibold tracking-widest text-[#cf2b2c] uppercase">
              {t('services.sectionTitle')}
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('services.title')}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-lg leading-7 text-gray-200 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <StaggerItem key={service.key}>
              <MagneticHover className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-gray-700/50 hover:border-[#cf2b2c]/40 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-[#004355]/25">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={t(`services.items.${service.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#cf2b2c] transition-colors duration-300">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      {t(`services.items.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </MagneticHover>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}

