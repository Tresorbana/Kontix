"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  toggleLanguage: () => void;
  isLanguageLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Default fallback translations
const DEFAULT_TRANSLATIONS = {
  loading: 'Loading...',
  error: 'Error loading translations',
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLanguage = 'es' 
}) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, any>>(DEFAULT_TRANSLATIONS);
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);

  // Set language and persist to localStorage
  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage !== language) {
      setLanguageState(newLanguage);
      
      // Update localStorage if in browser
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('language', newLanguage);
        } catch (error) {
          console.error('Failed to save language preference:', error);
        }
      }
    }
  }, [language]);

  // Toggle between languages
  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'es' ? 'en' : 'es');
  }, [language, setLanguage]);

  // Load saved language from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
          setLanguageState(savedLanguage);
        }
      } catch (error) {
        console.error('Error reading language preference:', error);
      }
    }
  }, [setLanguage]);

  // Load translations when language changes
  useEffect(() => {
    let isMounted = true;
    
    const loadTranslations = async () => {
      try {
        setIsLanguageLoading(true);
        // Add a small delay to show loading state (for demo purposes)
        await new Promise(resolve => setTimeout(resolve, 150));
        
        const translationsModule = await import(
          /* webpackChunkName: "[request]" */ 
          `../locales/${language}.json`
        );
        
        if (isMounted) {
          setTranslations({
            ...DEFAULT_TRANSLATIONS,
            ...translationsModule.default
          });
          
          // Update HTML lang attribute
          document.documentElement.lang = language;
          
          // Add language-specific body class
          document.body.classList.remove('lang-en', 'lang-es');
          document.body.classList.add(`lang-${language}`);
        }
      } catch (error) {
        console.error('Failed to load translations:', error);
        if (isMounted) {
          setTranslations(DEFAULT_TRANSLATIONS);
        }
      } finally {
        if (isMounted) {
          setIsLanguageLoading(false);
        }
      }
    };

    loadTranslations();
    
    return () => {
      isMounted = false;
    };
  }, [language]);

  // Translation function with parameter support
  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    if (isLanguageLoading) return '';
    
    const keys = key.split('.');
    let value: any = translations;
    
    // Navigate through the nested object to find the translation
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // In development, log missing keys but don't break the UI
        if (process.env.NODE_ENV === 'development') {
          console.warn(`[i18n] Missing translation for key: ${key}`);
        }
        return key; // Return the key as fallback
      }
    }
    
    // If we have a string value, process any parameters
    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce(
        (str, [param, paramValue]) => 
          str.replace(new RegExp(`{{${param}}}`, 'g'), String(paramValue)),
        value
      );
    }
    
    return typeof value === 'string' ? value : key;
  }, [translations, isLanguageLoading]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(() => ({
    language,
    setLanguage,
    t,
    toggleLanguage,
    isLanguageLoading,
  }), [language, setLanguage, t, toggleLanguage, isLanguageLoading]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};