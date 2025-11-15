"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LanguageToggle from '../ui/LanguageToggle';

export default function Navigation() {
  const { t } = useLanguage();
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
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl shadow-black/30 transition-all duration-500 hover:border-white/20 hover:backdrop-blur-2xl ${
          scrolled ? 'py-3 px-6' : 'py-4 px-8'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <Link href="#" className="flex items-center space-x-4 group">
              <motion.div 
                className="relative h-12 w-12 md:h-14 md:w-14 flex-shrink-0 rounded-xl bg-white/5 p-2 border border-white/10 transition-all duration-300 group-hover:bg-[#f8a725]/10 group-hover:border-[#f8a725]/30"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/logo.webp"
                  alt="Caribbean Ventures"
                  fill
                  className="object-contain p-1 transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-white group-hover:text-[#f8a725] transition-colors duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('company.name')}
              </motion.span>
            </Link>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-black/40 backdrop-blur-lg rounded-full px-1 py-1 border border-white/10 hover:border-[#f8a725]/50 transition-all duration-300 group">
                <LanguageToggle />
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent mx-1"></div>
                <motion.a 
                  href="#" 
                  className="relative overflow-hidden text-sm font-medium text-white hover:text-[#f8a725] px-4 py-1.5 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="relative z-10">{t('nav.contact')}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f8a725]/10 to-[#f8b84c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                </motion.a>
              </div>
              
              {/* Mobile menu button */}
              <motion.button 
                className="md:hidden p-2.5 rounded-xl bg-black/40 hover:bg-[#f8a725]/10 backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-[#f8a725]/50"
                aria-label="Menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f8a725]/10 blur-3xl -z-10"
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