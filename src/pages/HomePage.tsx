import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Phone, MapPin, Users, Award, Clock, Stethoscope } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clinics, services, reviews, slides } from '../data/mockData';
import Slider from '../components/Slider';
import AppointmentModal from '../components/AppointmentModal';

export default function HomePage() {
  const { t } = useLanguage();
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'stethoscope':
        return <Stethoscope className="w-8 h-8" />;
      case 'heart':
        return <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">❤️</div>;
      case 'baby':
        return <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">👶</div>;
      case 'scissors':
        return <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">✂️</div>;
      case 'brain':
        return <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">🧠</div>;
      case 'eye':
        return <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">👁️</div>;
      default:
        return <Stethoscope className="w-8 h-8" />;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  {t('hero.cta')}
                </button>
                <a
                  href="tel:+78155534567"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('phone')}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Slider Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Slider slides={slides} />
          </div>
        </section>

        {/* About Clinics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('about.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {clinics.map((clinic) => (
                <Link
                  key={clinic.id}
                  to={`/clinic/${clinic.id}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {clinic.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{clinic.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{clinic.address}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-sm">{clinic.phone}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-50 rounded-xl p-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">5000+</div>
                <div className="text-gray-600">Пациентов в год</div>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">25+</div>
                <div className="text-gray-600">Опытных врачей</div>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-gray-600">Скорая помощь</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-gray-600">Специализаций</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-lg text-gray-600">
                Полный спектр медицинских услуг для вашего здоровья
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-4">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Подробнее</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Все услуги
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Appointment CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('appointment.title')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t('appointment.description')}
              </p>
              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Записаться сейчас
              </button>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t('reviews.title')}
              </h2>
              <p className="text-lg text-gray-600">
                Что говорят наши пациенты
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">
                      {new Date(review.date).toLocaleDateString('ru-RU')}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                  <div className="text-gray-800 font-medium">
                    {review.patientName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </>
  );
}