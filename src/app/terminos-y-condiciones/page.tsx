'use client';

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useLanguage } from '@/contexts/LanguageContext';

export default function TerminosYCondicionesPage() {
  const { t } = useLanguage();
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">Caribbean Ventures</h1>
            <h2 className="text-2xl font-semibold">{t('terms.title')}</h2>
          </header>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('terms.sections.modifications.title')}</h3>
            <p>
              {t('terms.sections.modifications.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('terms.sections.usage.title')}</h3>
            <p>
              {t('terms.sections.usage.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('terms.sections.property.title')}</h3>
            <p>
              {t('terms.sections.property.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('terms.sections.liability.title')}</h3>
            <p>
              {t('terms.sections.liability.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('terms.sections.links.title')}</h3>
            <p>
              {t('terms.sections.links.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('terms.sections.termination.title')}</h3>
            <p>
              {t('terms.sections.termination.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('terms.sections.law.title')}</h3>
            <p>
              {t('terms.sections.law.description')}
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">{t('footer.contactTitle')}</h3>
            <p className="text-sm text-gray-300">
              {t('footer.address')}
              <br />
              {t('contact.emailLabel')}: contact@caribbean.ventures
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
