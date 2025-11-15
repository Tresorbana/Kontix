import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatDate, formatNumber, formatCurrency } from '@/lib/i18n-utils';

/**
 * Higher-Order Component that injects language utilities into a component
 * @param WrappedComponent The component to enhance with language utilities
 */
const withLanguage = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithLanguage: React.FC<P> = (props) => {
    const { language, t } = useLanguage();

    // Enhanced i18n utilities with current language
    const i18n = {
      t,
      language,
      formatDate: (date: Date) => formatDate(date, language),
      formatNumber: (num: number) => formatNumber(num, language),
      formatCurrency: (amount: number, currency?: string) => 
        formatCurrency(amount, language, currency),
    };

    return <WrappedComponent {...(props as P)} i18n={i18n} />;
  };

  // Set a display name for the HOC for better debugging
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLanguage.displayName = `withLanguage(${displayName})`;

  return WithLanguage;
};

export default withLanguage;
