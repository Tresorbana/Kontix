"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  // Set favicon dynamically
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/logo.webp';
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/logo.webp';
      document.head.appendChild(newLink);
    }
  }, []);

  // Handle smooth scrolling for hash links
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Handle initial load with hash
    handleHashScroll();

    // Handle hash change events
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#cf2b2c]/10 to-[#004355]/10"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#cf2b2c]/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-[#004355]/20 blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-start px-4 sm:px-6 md:px-12 lg:px-24 pb-0 pt-28 sm:pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center md:text-left w-full">
          {/* Animated Tagline */}
          <motion.div
            className="mb-4 sm:mb-6 overflow-hidden"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#cf2b2c] text-white text-xs sm:text-sm font-semibold rounded-full">
              {t('hero.tagline')}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#004355] block">{t('hero.headline.line1')}</span>
            <span className="text-[#cf2b2c]">{t('hero.headline.line2')}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto md:mx-0 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#cf2b2c] hover:bg-[#cf2b2c]/90 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              {t('hero.cta.primary')}
            </Link>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  const offset = 120; // Offset for fixed navigation
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-gray-900 text-white border-2 border-[#004355] text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('hero.cta.secondary')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
