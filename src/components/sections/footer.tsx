'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer
      className="relative bg-black text-[#8FA8B0] pt-24 pb-10"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-y-8 sm:gap-y-12 md:gap-x-8 pb-12 sm:pb-16">
          {/* Column 1: Logo & company */}
          <div className="sm:col-span-2 md:col-span-5 lg:col-span-4">
            <Link href="/" aria-label={t('nav.home')} className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Image
                src="/logo.webp"
                alt="Caribbean Ventures"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-white font-bold text-xl sm:text-2xl">
                Caribbean Ventures
              </span>
            </Link>
          </div>

          {/* Column 2: Address & contact */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-4">
            <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">{t('footer.addressTitle')}</h3>
            <p className="text-xs sm:text-sm text-gray-300">{t('footer.address')}</p>

            <h3 className="font-semibold text-base sm:text-lg text-white mt-5 sm:mt-6 mb-2">{t('footer.contactTitle')}</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              <span className="block">contact@caribbean.ventures</span>
            </p>
          </div>

          {/* Column 3: Services */}
          <div className="sm:col-span-1 md:col-span-4 lg:col-span-4">
            <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>{t('footer.service1')}</li>
              <li>{t('footer.service2')}</li>
              <li>{t('footer.service3')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Caribbean Ventures
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/politica-de-privacidad"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;