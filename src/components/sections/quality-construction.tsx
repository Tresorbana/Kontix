'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import LucideIcon from '@/components/ui/LucideIcon';


const QualityConstruction = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-background text-foreground py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[480px] lg:h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=800&fit=crop&auto=format&q=80" // Unique: Global Network 2
              alt={t('alt.meeting')}
              width={314}
              height={434}
              className="absolute top-0 left-0 w-3/4 max-w-[314px] rounded-2xl object-cover z-10"
            />
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=800&fit=crop&auto=format&q=80" // Unique: Modern Workspace
              alt={t('alt.collaboration')}
              width={313}
              height={311}
              className="absolute bottom-0 right-0 w-3/4 max-w-[313px] rounded-2xl object-cover"
            />
          </div>

          <div>
            <p className="text-primary text-sm font-semibold tracking-[1.4px] uppercase mb-4">
              {t('quality.sectionTitle')}
            </p>
            <h2 className="text-4xl lg:text-[40px] font-semibold text-foreground leading-tight lg:leading-[52px]">
              {t('quality.title')}
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-300">
              {t('quality.description')}
            </p>

            <div className="mt-10 pt-10 border-t border-border space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-1 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <LucideIcon name="CheckCircle2" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t('about.features.experience.title')}
                  </h3>
                  <p className="text-white/70">{t('about.features.experience.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-1 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <LucideIcon name="Users2" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t('about.features.personalized.title')}
                  </h3>
                  <p className="text-white/70">{t('about.features.personalized.description')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityConstruction;