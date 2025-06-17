import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ru' | 'en';
  setLanguage: (lang: 'ru' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    'nav.about': 'О клиниках',
    'nav.doctors': 'Наши врачи',
    'nav.services': 'Наши услуги',
    'nav.patients': 'Пациенту',
    'nav.specialists': 'Медицинским специалистам',
    'nav.legal': 'Юридическим лицам',
    'nav.contacts': 'Контакты',
    'header.appointment': 'Запись на прием',
    'header.search': 'Поиск',
    'header.account': 'Личный кабинет',
    'header.accessibility': 'Версия для слабовидящих',
    'hero.title': 'Забота о вашем здоровье',
    'hero.subtitle': 'Профессиональная медицинская помощь с заботой о каждом пациенте',
    'hero.cta': 'Записаться на прием',
    'about.title': 'О наших клиниках',
    'about.description': 'Мы предоставляем качественную медицинскую помощь с использованием современного оборудования и передовых методов лечения.',
    'services.title': 'Наши услуги',
    'appointment.title': 'Запись на прием',
    'appointment.description': 'Удобная онлайн запись к специалистам наших клиник',
    'reviews.title': 'Отзывы пациентов',
    'footer.contacts': 'Контакты',
    'footer.sitemap': 'Карта сайта',
    'footer.social': 'Мы в социальных сетях',
    'phone': '+7 (815) 123-45-67'
  },
  en: {
    'nav.about': 'About Clinics',
    'nav.doctors': 'Our Doctors',
    'nav.services': 'Our Services',
    'nav.patients': 'For Patients',
    'nav.specialists': 'For Medical Specialists',
    'nav.legal': 'For Legal Entities',
    'nav.contacts': 'Contacts',
    'header.appointment': 'Book Appointment',
    'header.search': 'Search',
    'header.account': 'Personal Account',
    'header.accessibility': 'Accessibility Version',
    'hero.title': 'Caring for Your Health',
    'hero.subtitle': 'Professional medical care with attention to every patient',
    'hero.cta': 'Book Appointment',
    'about.title': 'About Our Clinics',
    'about.description': 'We provide quality medical care using modern equipment and advanced treatment methods.',
    'services.title': 'Our Services',
    'appointment.title': 'Book Appointment',
    'appointment.description': 'Convenient online booking with our clinic specialists',
    'reviews.title': 'Patient Reviews',
    'footer.contacts': 'Contacts',
    'footer.sitemap': 'Site Map',
    'footer.social': 'Follow Us',
    'phone': '+7 (815) 123-45-67'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}