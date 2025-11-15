import { useLanguage } from '@/contexts/LanguageContext';
import { 
  formatDate as baseFormatDate, 
  formatNumber as baseFormatNumber, 
  formatCurrency as baseFormatCurrency,
  getTextDirection
} from '@/lib/i18n-utils';

/**
 * Custom hook that provides i18n utilities
 */
const useI18n = () => {
  const { language, t, isLanguageLoading } = useLanguage();

  /**
   * Format a date according to the current language
   */
  const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return baseFormatDate(dateObj, language, options);
  };

  /**
   * Format a number according to the current language
   */
  const formatNumber = (num: number, options?: Intl.NumberFormatOptions) => {
    return baseFormatNumber(num, language, options);
  };

  /**
   * Format currency according to the current language
   */
  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return baseFormatCurrency(amount, language, currency);
  };

  /**
   * Get the text direction for the current language
   */
  const direction = getTextDirection(language);

  return {
    // Core translation function
    t,
    
    // Current language
    language,
    
    // Loading state
    isLanguageLoading,
    
    // Text direction
    direction,
    isRTL: direction === 'rtl',
    
    // Formatting functions
    formatDate,
    formatNumber,
    formatCurrency,
    
    // Helper to create language-aware class names
    rtl: (rtlClass: string, ltrClass: string = '') => 
      direction === 'rtl' ? rtlClass : ltrClass,
    
    // Helper to get text alignment class
    textAlign: (align: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end' = 'start') => {
      if (align === 'start') return direction === 'rtl' ? 'text-right' : 'text-left';
      if (align === 'end') return direction === 'rtl' ? 'text-left' : 'text-right';
      return `text-${align}`;
    }
  };
};

export default useI18n;
