import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const siteMapLinks = [
    { title: t('nav.about'), href: '/about' },
    { title: t('nav.doctors'), href: '/doctors' },
    { title: t('nav.services'), href: '/services' },
    { title: t('nav.patients'), href: '/patients' },
    { title: t('nav.specialists'), href: '/specialists' },
    { title: t('nav.legal'), href: '/legal' },
    { title: t('nav.contacts'), href: '/contacts' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">МедЦентр</h3>
                <p className="text-sm text-gray-400">Кольская ЦРБ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональная медицинская помощь с заботой о каждом пациенте. 
              Современное оборудование и опытные специалисты.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>г. Кола, ул. Центральная, 15</p>
                  <p>Главная больница</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+78155534567" 
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +7 (815) 553-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@kolamed.ru" 
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@kolamed.ru
                </a>
              </div>
            </div>
          </div>

          {/* Site map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.sitemap')}</h4>
            <nav className="space-y-2">
              {siteMapLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social media and quality portal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.social')}</h4>
            <div className="space-y-4">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">VK</span>
                </div>
                <span>ВКонтакте</span>
              </a>
              
              <div className="pt-4 border-t border-gray-800">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Портал независимой оценки качества</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 ГОБУЗ "Кольская центральная районная больница". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}