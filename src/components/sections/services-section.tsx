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
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format&q=80',
    link: '#'
  },
  {
    key: 'corporate',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&auto=format&q=80',
    link: '#'
  },
  {
    key: 'structure',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&auto=format&q=80',
    link: '#'
  },
  {
    key: 'portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80',
    link: '#'
  },
  {
    key: 'global',
    imageUrl: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&h=300&fit=crop&auto=format&q=80',
    link: '#'
  },
  {
    key: 'banking',
    imageUrl: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=300&fit=crop&auto=format&q=80',
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

