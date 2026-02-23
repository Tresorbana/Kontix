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
    key: 'structuring',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format&q=80', // Unique: Cybersecurity Grid
    link: '#'
  },
  {
    key: 'operations',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop&auto=format&q=80', // Unique: Earth/Satellite View
    link: '#'
  },
  {
    key: 'capital',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80', // Ultra-stable business analytics abstract (Resolved 404)
    link: '#'
  },
  {
    key: 'advisory',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80', // Ultra-stable corporate architecture facade
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <StaggerItem key={service.key}>
              <MagneticHover className="group h-full">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-gray-700/50 hover:border-[#cf2b2c]/40 transition-all duration-300 h-full flex flex-col group-hover:shadow-lg group-hover:shadow-[#004355]/25">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={service.imageUrl}
                      alt={t(`services.items.${service.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#cf2b2c] transition-colors duration-300 min-h-[3.5rem]">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300 flex-grow">
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

