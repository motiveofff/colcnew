import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Users, ArrowLeft, Stethoscope } from 'lucide-react';
import { clinics } from '../data/mockData';

export default function ClinicDetailPage() {
  const { id } = useParams<{ id: string }>();
  const clinic = clinics.find(c => c.id === id);

  if (!clinic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Клиника не найдена</h1>
          <Link to="/about" className="text-blue-600 hover:text-blue-700">
            Вернуться к списку клиник
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/about"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к списку клиник
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {clinic.name}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">О клинике</h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>{clinic.description}</p>
                  <p>
                    Наша клиника оснащена современным медицинским оборудованием и предоставляет 
                    полный спектр медицинских услуг. Мы работаем с использованием передовых 
                    методов диагностики и лечения, что позволяет нам обеспечивать высокое 
                    качество медицинской помощи.
                  </p>
                  <p>
                    Команда профессиональных врачей и медицинского персонала готова оказать 
                    квалифицированную помощь в любое время. Мы стремимся к индивидуальному 
                    подходу к каждому пациенту и созданию комфортных условий для лечения.
                  </p>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Специализации</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clinic.specialties.map((specialty) => (
                    <div
                      key={specialty}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Stethoscope className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="font-medium text-gray-800">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Team */}
              {clinic.doctors.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Руководство</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clinic.doctors.map((doctor) => (
                      <div key={doctor.id} className="flex items-start space-x-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                          <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                          <p className="text-sm text-gray-600">{doctor.description}</p>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>Стаж: {doctor.experience}</p>
                            <p>Образование: {doctor.education}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Адрес</p>
                      <p className="text-gray-600">{clinic.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Телефон</p>
                      <a
                        href={`tel:${clinic.phone}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 8:00-18:00</p>
                      <p className="text-gray-600">Сб: 9:00-15:00</p>
                      <p className="text-gray-600">Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Записаться на прием</h3>
                <div className="space-y-3">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    Онлайн запись
                  </button>
                  <a
                    href={`tel:${clinic.phone}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors"
                  >
                    Позвонить
                  </a>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">Экстренная помощь</h3>
                <p className="text-red-700 text-sm mb-3">
                  При неотложных состояниях обращайтесь в приемное отделение
                </p>
                <a
                  href="tel:103"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors"
                >
                  Скорая помощь: 103
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}