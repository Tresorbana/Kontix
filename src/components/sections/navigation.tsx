"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LanguageToggle from '../ui/LanguageToggle';
import { Globe } from 'lucide-react';

export default function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname !== '/') {
      // Let the browser navigate to /#section
      return;
    }
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3 sm:py-4'
      }`}>
      <div className="container mx-auto px-4">
        <div className={`backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl shadow-black/30 transition-all duration-500 hover:border-white/20 hover:backdrop-blur-2xl ${scrolled ? 'py-2.5 px-4 sm:px-6' : 'py-3 px-4 sm:px-6 md:px-8'
          }`}>
          <div className="flex items-center justify-between">
            {/* Logo (left) */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-white/5 p-2 border-2 border-white/20 transition-all duration-300">
                <Image
                  src="/logo.webp"
                  alt="Caribbean Ventures"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">
                {t('company.name')}
              </span>
            </Link>

            {/* Right side actions */}
            <div className="flex items-center space-x-4 justify-end">
              <div className="hidden md:flex items-center space-x-2 bg-black/40 backdrop-blur-lg rounded-full px-1 py-1 border border-white/10 hover:border-[#cf2b2c]/60 transition-all duration-300 group">
                <nav className="flex items-center space-x-1">
                  <Link
                    href="/#about"
                    onClick={(e) => scrollToSection(e, 'about')}
                    className="relative overflow-hidden text-sm font-medium text-white hover:text-[#cf2b2c] px-4 py-1.5 transition-colors duration-300"
                  >
                    <span className="relative z-10">{t('nav.about')}</span>
                  </Link>
                  <Link
                    href="/#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="relative overflow-hidden text-sm font-medium text-white hover:text-[#cf2b2c] px-4 py-1.5 transition-colors duration-300"
                  >
                    <span className="relative z-10">{t('nav.services')}</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="relative overflow-hidden text-sm font-medium text-white hover:text-[#cf2b2c] px-4 py-1.5 transition-colors duration-300"
                  >
                    <span className="relative z-10">{t('nav.contact')}</span>
                  </Link>
                </nav>
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent mx-1"></div>
                <LanguageToggle />
              </div>

              {/* Mobile language toggle button */}
              <motion.button
                className="md:hidden px-4 py-2.5 rounded-xl bg-black/40 hover:bg-[#004355]/20 backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-[#cf2b2c]/60 flex items-center gap-2"
                aria-label="Toggle Language"
                onClick={() => toggleLanguage()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm sm:text-base font-medium text-white uppercase">
                  {language === 'es' ? 'EN' : 'ES'}
                </span>
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>


      {/* Subtle glow effect */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#004355]/20 blur-3xl -z-10"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </header>
  );
}