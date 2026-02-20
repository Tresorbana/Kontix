'use client';

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <header className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold">{t('contact.title')}</h1>
            <p className="text-gray-300">
              {t('contact.subtitle')}
            </p>
          </header>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('contact.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('contact.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                {t('contact.company')}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t('contact.submit')}
            </button>

            <p className="text-xs text-gray-400 mt-4">
              {t('contact.directEmail')} <span className="font-medium">contact@caribbean.ventures</span>
              <br />
              {t('contact.addressLabel')}
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
