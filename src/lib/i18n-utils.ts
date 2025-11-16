/**
 * i18n Utilities
 * A collection of helper functions for internationalization
 */

import { Language } from '@/contexts/LanguageContext';

/**
 * Format a date according to the specified language
 */
export const formatDate = (date: Date, language: Language, options?: Intl.DateTimeFormatOptions): string => {
  return new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(date);
};

/**
 * Format a number according to the specified language
 */
export const formatNumber = (num: number, language: Language, options?: Intl.NumberFormatOptions): string => {
  return new Intl.NumberFormat(language, options).format(num);
};

/**
 * Format currency according to the specified language and currency code
 */
export const formatCurrency = (
  amount: number, 
  language: Language, 
  currency: string = 'USD'
): string => {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Get the direction (ltr/rtl) for a language
 */
export const getTextDirection = (language: Language): 'ltr' | 'rtl' => {
  // Add RTL languages here if needed
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  return rtlLanguages.includes(language) ? 'rtl' : 'ltr';
};

/**
 * Get the full language name
 */
export const getLanguageName = (language: Language): string => {
  const names: Record<string, string> = {
    en: 'English',
    es: 'Español',
  };
  return names[language] || language;
};

/**
 * Get the language code from a potential language string
 */
export const getValidLanguage = (lang: string | null): Language => {
  if (lang === 'es' || lang === 'en') {
    return lang as Language;
  }
  // Default fallback: Spanish
  return 'es';
};

/**
 * Load translations dynamically with error handling
 */
export const loadTranslations = async (language: Language) => {
  try {
    const translationsModule = await import(`@/locales/${language}.json`);
    return translationsModule.default;
  } catch (error) {
    console.error(`Failed to load ${language} translations:`, error);
    // Fallback to empty object to prevent crashes
    return {};
  }
};
