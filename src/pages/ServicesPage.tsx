import React from 'react';
import { Stethoscope, Heart, Baby, Scissors, Brain, Eye, Activity, Shield } from 'lucide-react';
import { services } from '../data/mockData';

export default function ServicesPage() {
  const getServiceIcon = (iconName: string, size: string = 'w-8 h-8') => {
    const iconClass = `${size} text-blue-600`;
    
    switch (iconName) {
      case 'stethoscope':
        return <Stethoscope className={iconClass} />;
      case 'heart':
        return <Heart className={iconClass} />;
      case 'baby':
        return <Baby className={iconClass} />;
      case 'scissors':
        return <Scissors className={iconClass} />;
      case 'brain':
        return <Brain className={iconClass} />;
      case 'eye':
        return <Eye className={iconClass} />;
      default:
        return <Stethoscope className={iconClass} />;
    }
  };

  const additionalServices = [
    {
      id: 'diagnostics',
      name: 'Диагностика',
      description: 'Современные методы диагностики: УЗИ, рентген, лабораторные исследования',
      icon: 'activity',
      features: ['УЗИ диагностика', 'Рентгенография', 'Лабораторные анализы', 'ЭКГ']
    },
    {
      id: 'emergency',
      name: 'Скорая помощь',
      description: 'Круглосуточная экстренная медицинская помощь',
      icon: 'shield',
      features: ['Выезд на дом', 'Реанимация', 'Транспортировка', 'Экстренная хирургия']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Полный спектр медицинских услуг с использованием современного оборудования 
              и передовых методов лечения
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Что входит в услугу:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {service.name === 'Терапия' && (
                      <>
                        <li>• Первичный осмотр и консультация</li>
                        <li>• Диагностика заболеваний</li>
                        <li>• Назначение лечения</li>
                        <li>• Профилактические осмотры</li>
                      </>
                    )}
                    {service.name === 'Кардиология' && (
                      <>
                        <li>• ЭКГ диагностика</li>
                        <li>• Эхокардиография</li>
                        <li>• Холтеровское мониторирование</li>
                        <li>• Лечение аритмий</li>
                      </>
                    )}
                    {service.name === 'Педиатрия' && (
                      <>
                        <li>• Плановые осмотры детей</li>
                        <li>• Вакцинация</li>
                        <li>• Лечение детских заболеваний</li>
                        <li>• Консультации по развитию</li>
                      </>
                    )}
                    {service.name === 'Хирургия' && (
                      <>
                        <li>• Плановые операции</li>
                        <li>• Эндоскопическая хирургия</li>
                        <li>• Послеоперационное наблюдение</li>
                        <li>• Консультации хирурга</li>
                      </>
                    )}
                    {service.name === 'Неврология' && (
                      <>
                        <li>• Диагностика нервных расстройств</li>
                        <li>• Лечение головных болей</li>
                        <li>• Реабилитация после инсульта</li>
                        <li>• Электроэнцефалография</li>
                      </>
                    )}
                    {service.name === 'Офтальмология' && (
                      <>
                        <li>• Проверка зрения</li>
                        <li>• Лечение глазных заболеваний</li>
                        <li>• Подбор очков и линз</li>
                        <li>• Профилактические осмотры</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    Записаться на прием
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {service.icon === 'activity' ? (
                      <Activity className="w-8 h-8 text-blue-600" />
                    ) : (
                      <Shield className="w-8 h-8 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Включает:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {service.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    {service.icon === 'shield' ? 'Вызвать скорую' : 'Записаться'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Нужна консультация специалиста?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Запишитесь на прием к нашим врачам прямо сейчас
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105">
                Записаться онлайн
              </button>
              <a
                href="tel:+78155534567"
                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all"
              >
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}