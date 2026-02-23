'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop&auto=format&q=80')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                {t('about.title')}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t('about.description')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.sectionTitle')}
              </h2>
              <div className="w-24 h-1 bg-[#cf2b2c] mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                {t('about.description')}
              </p>
            </div>
          </FadeIn>

          {/* Mission Section */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('mission.title')}
              </h2>
              <div className="w-24 h-1 bg-[#cf2b2c] mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                {t('mission.description')}
              </p>
            </div>
          </FadeIn>

          {/* Values Section */}
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('quality.sectionTitle')}
              </h2>
              <div className="w-24 h-1 bg-[#cf2b2c] mx-auto mb-12"></div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  { title: t('about.features.experience.title'), description: t('about.features.experience.description') },
                  { title: t('about.features.personalized.title'), description: t('about.features.personalized.description') },
                  { title: t('about.title'), description: t('about.description') }
                ].map((value, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#cf2b2c]/40 transition-colors">
                    <h3 className="text-2xl font-bold text-[#cf2b2c] mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {t('finalCta.description')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#cf2b2c] text-white font-bold py-3 px-8 rounded-full hover:bg-[#b02223] transition-colors"
            >
              {t('finalCta.button')}
            </Link>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
