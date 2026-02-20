import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';

const stepKeys = ['step1', 'step2', 'step3', 'step4'];

const StrongFoundations = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background text-foreground py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-semibold tracking-[0.2em] uppercase text-primary text-sm mb-4">
            {t('process.sectionTitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('process.title')}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t('process.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stepKeys.map((key, index) => (
            <div key={key} className="p-8 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t(`process.steps.${key}.title`)}
              </h3>
              <p className="text-muted leading-relaxed">
                {t(`process.steps.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrongFoundations;