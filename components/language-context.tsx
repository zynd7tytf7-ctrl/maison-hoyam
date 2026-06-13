"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, type Locale, type Translations } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  t: translations.en,
  setLocale: () => {},
  isRtl: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage?.getItem?.('maison-hoyam-locale');
      if (saved === 'ar' || saved === 'en') {
        setLocaleState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const htmlEl = document?.documentElement;
    if (htmlEl) {
      htmlEl.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      htmlEl.setAttribute('lang', locale);
    }
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage?.setItem?.('maison-hoyam-locale', newLocale);
    } catch {
      // ignore
    }
  }, []);

  const t = translations?.[locale] ?? translations.en;
  const isRtl = locale === 'ar';

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
