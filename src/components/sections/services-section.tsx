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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-5">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <p className="text-sm font-semibold tracking-widest text-yellow-500 uppercase">
              {t('services.sectionTitle')}
            </p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent sm:text-5xl">
              {t('services.title')}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-lg leading-7 text-yellow-100/80 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <StaggerItem key={service.key}>
              <MagneticHover className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-gray-700/50 hover:border-yellow-500/20 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-yellow-500/10">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={t(`services.items.${service.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-yellow-50 mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                    <p className="text-yellow-100/70 text-sm leading-relaxed group-hover:text-yellow-100/90 transition-colors duration-300">
                      {t(`services.items.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </MagneticHover>
            </StaggerItem>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105">
            {t('services.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}

