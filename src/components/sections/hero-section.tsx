"use client";

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/animations/ScrollAnimations';

// Floating element component with style prop
type FloatingElementProps = {
  className: string;
  initialY: number;
  duration: number;
  delay?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const FloatingElement = ({ 
  className, 
  initialY, 
  duration, 
  delay = 0, 
  children, 
  style 
}: FloatingElementProps) => (
  <motion.div
    className={className}
    style={style}
    initial={{ y: initialY }}
    animate={{
      y: [initialY, initialY - 20, initialY],
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  const { t } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax - Modern Caribbean business district */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
          y: yBg,
          opacity: opacityBg
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80">
        {/* Gold dot pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-[#f8a725]"
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(4px)',
                opacity: Math.random() * 0.5 + 0.1,
                transform: `scale(${Math.random() * 0.5 + 0.5})`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Animated floating elements */}
      <FloatingElement 
        className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full blur-xl" 
        style={{ backgroundColor: 'rgba(248, 167, 37, 0.2)' }}
        initialY={0} 
        duration={8} 
      />
      <FloatingElement 
        className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full blur-xl" 
        style={{ backgroundColor: 'rgba(248, 167, 37, 0.15)' }}
        initialY={20} 
        duration={10} 
        delay={1}
      />
      <FloatingElement 
        className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full blur-lg" 
        style={{ backgroundColor: 'rgba(248, 167, 37, 0.1)' }}
        initialY={10} 
        duration={12} 
        delay={0.5}
      />
      
      {/* Additional floating dots */}
      {[...Array(8)].map((_, i) => (
        <FloatingElement
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            backgroundColor: '#f8a725',
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.15 + 0.05,
            filter: 'blur(6px)'
          }}
          initialY={Math.random() * 40 - 20}
          duration={Math.random() * 10 + 10}
          delay={Math.random() * 2}
        />
      ))}
      
      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-5 py-32"
        style={{ y: yText }}
      >
        <div className="flex flex-col items-center">
          {/* Glassmorphic card */}
          <FadeIn>
            <div 
              className="hero-card w-full max-w-4xl backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/30 hover:shadow-[#f8a725]/20 transition-all duration-500 hover:border-[#f8a725]/30 hover:backdrop-blur-2xl transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              <div className="space-y-8 text-center">
                {/* Tagline */}
                <motion.div 
                  className="inline-block px-4 py-1.5 rounded-full bg-[#f8a725]/10 border border-[#f8a725]/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-sm font-medium text-[#f8a725]">
                    {t('hero.tagline')}
                  </span>
                </motion.div>
                
                {/* Headline with gradient text */}
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sans"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="block mb-4 bg-gradient-to-r from-[#f8a725] via-[#f8b84c] to-[#f8c973] bg-clip-text text-transparent hover:from-[#f8a725] hover:via-[#f8b84c] hover:to-[#f8c973] transition-all duration-500">
                    {t('hero.headline.line1')}
                  </span>
                  <span className="block text-yellow-50 font-light">
                    {t('hero.headline.line2')}
                  </span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-xl text-yellow-100/90 max-w-2xl mx-auto font-light leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t('hero.subtitle')}
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <a 
                    href="#" 
                    className="relative overflow-hidden group bg-gradient-to-r from-[#f8a725] to-[#f8b84c] text-gray-900 font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#f8a725]/30 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
                      {t('hero.cta.primary')}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#f8b84c] to-[#f8d19a] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="relative overflow-hidden group border border-yellow-50/20 text-yellow-50 font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/5 hover:border-[#f8a725]/30 hover:shadow-lg hover:shadow-[#f8a725]/10"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {t('hero.cta.secondary')}
                    </span>
                  </a>
                </motion.div>
                
                {/* Trust indicators */}
                <motion.div 
                  className="mt-12 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-yellow-100/80">
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-3">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f8a725] to-[#f8c973] border-2 border-black/20"></div>
                        ))}
                      </div>
                      <span>{t('hero.trust.clients')}</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#f8a725] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{t('hero.trust.experience')}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
          
          {/* Cursor highlight effect */}
          <style jsx global>{`
            .hero-card {
              position: relative;
              overflow: hidden;
            }
            .hero-card::before {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: 
                radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                  rgba(248, 167, 37, 0.15),
                  transparent 50%
                ),
                radial-gradient(circle at 20% 30%, rgba(248, 167, 37, 0.1) 0%, transparent 25%),
                radial-gradient(circle at 80% 70%, rgba(248, 167, 37, 0.1) 0%, transparent 25%);
              z-index: -1;
              opacity: 0;
              transition: opacity 0.5s ease, transform 0.3s ease;
            }
            .hero-card:hover::before {
              opacity: 1;
            }
          `}</style>
        </div>
      </motion.div>
    </section>
  );
}
