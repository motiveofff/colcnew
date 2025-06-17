import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Phone, Globe, Eye, Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AppointmentModal from './AppointmentModal';
import AuthModal from './AuthModal';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { key: 'nav.about', href: '/about' },
    { key: 'nav.doctors', href: '/doctors' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.patients', href: '/patients' },
    { key: 'nav.specialists', href: '/specialists' },
    { key: 'nav.legal', href: '/legal' },
    { key: 'nav.contacts', href: '/contacts' }
  ];

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-blue-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+78155534567" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{t('phone')}</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Eye className="w-4 h-4" />
                <span>{t('header.accessibility')}</span>
              </button>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2 py-1 rounded ${language === 'ru' ? 'bg-blue-700' : 'hover:bg-blue-700'} transition-colors`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-700' : 'hover:bg-blue-700'} transition-colors`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">МедЦентр</h1>
                <p className="text-sm text-gray-600">Кольская ЦРБ</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder={t('header.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm"
                />
              </div>

              {/* Appointment button */}
              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                {t('header.appointment')}
              </button>

              {/* User account */}
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline">{t('header.account')}</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder={t('header.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
      
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </>
  );
}