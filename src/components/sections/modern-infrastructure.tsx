"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface StatCounterProps {
  targetValue: number;
  suffix: string;
  decimals: number;
  className?: string;
}

const StatCounter = ({ targetValue, suffix, decimals, className }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutQuad(progress);

            const currentValue = easedProgress * targetValue;
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [targetValue]);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default function ModernInfrastructure() {
  const { t } = useLanguage();
  return (
    <section className="bg-background py-[100px]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-x-[100px] gap-y-12 items-center">

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=1200&fit=crop&auto=format&q=80" // Unique: Core Data Center (Resolved 404)
              alt={t('alt.infrastructure')}
              width={668}
              height={708}
              className="rounded-[20px] w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <Link href="/contact" className="absolute bottom-[40px] -left-[70px] hidden xl:flex bg-primary rounded-[20px] p-[30px] items-center gap-5 w-[495px]">
              <div className="relative h-[82px] w-[82px] rounded-full overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&auto=format&q=80" // Ultra-stable global network node abstract icon
                  alt={t('alt.professional')}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-primary-foreground text-[22px] font-semibold leading-[1.3] flex-1">
                {t('mission.description')}
              </p>
              <ArrowRight
                className="w-[50px] h-[50px] text-primary-foreground flex-shrink-0"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="text-primary uppercase tracking-[0.1em] font-medium text-base mb-4">{t('infrastructure.sectionTitle')}</p>
              <h2 className="text-white text-[40px] font-bold leading-[1.2]">{t('infrastructure.title')}</h2>
            </div>

            <Link href="/contact" className="group inline-flex items-center gap-4">
              <span className="text-white font-medium text-[18px] group-hover:text-primary transition-colors">{t('services.viewAll')}</span>
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-col gap-10 mt-5">
              <p className="text-muted text-base max-w-sm">{t('infrastructure.description')}</p>
              <p className="text-muted text-base max-w-sm">{t('about.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}