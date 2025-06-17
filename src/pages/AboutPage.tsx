import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Users, Award, Calendar, Building } from 'lucide-react';
import { clinics } from '../data/mockData';

export default function AboutPage() {
  const sections = [
    { id: 'administration', title: 'Администрация', href: '/about/administration' },
    { id: 'vacancies', title: 'Вакансии', href: '/about/vacancies' },
    { id: 'history', title: 'История', href: '/about/history' },
    { id: 'reviews', title: 'Отзывы', href: '/about/reviews' },
    { id: 'clinics', title: 'Клиники', href: '/about/clinics' },
    { id: 'media', title: 'СМИ о нас', href: '/about/media' },
    { id: 'partners', title: 'Партнеры', href: '/about/partners' },
    { id: 'licenses', title: 'Лицензии', href: '/about/licenses' }
  ];

  const facts = [
    { number: '1956', label: 'Год основания', icon: Calendar },
    { number: '5000+', label: 'Пациентов в год', icon: Users },
    { number: '25+', label: 'Врачей-специалистов', icon: Award },
    { number: '3', label: 'Филиала', icon: Building }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О наших клиниках</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Более 65 лет мы предоставляем качественную медицинскую помощь жителям Кольского района
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.href}
                className="bg-gray-100 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">О клинике</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                ГОБУЗ "Кольская центральная районная больница" — ведущее медицинское учреждение 
                Кольского района, которое уже более 65 лет оказывает качественную медицинскую помощь 
                жителям региона.
              </p>
              <p>
                Наша больница является многопрофильным медицинским учреждением, оснащенным 
                современным оборудованием и укомплектованным высококвалифицированными специалистами. 
                Мы постоянно развиваемся, внедряем новые методы диагностики и лечения, повышаем 
                квалификацию наших сотрудников.
              </p>
              <p>
                Основными принципами нашей работы являются профессионализм, человечность, 
                индивидуальный подход к каждому пациенту и стремление к непрерывному совершенствованию 
                качества медицинских услуг.
              </p>
            </div>
          </div>

          {/* Facts and Figures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Факты и цифры</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {facts.map((fact, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <fact.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{fact.number}</div>
                  <div className="text-gray-600">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinics Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Наши филиалы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {clinic.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{clinic.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{clinic.address}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{clinic.phone}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {clinic.specialties.slice(0, 3).map((specialty) => (
                          <span
                            key={specialty}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                        {clinic.specialties.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{clinic.specialties.length - 3} еще
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Фотогалерея</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'https://www.mos.ru/upload/newsfeed/articles/0ee86fbc1ef41c1ee466e07b0d9a0129/250610_Operatsii_do_i_posle_rozhdeniya_GKB_Filatova_016.jpg',
                'https://static2.banki.ru/ugc/ab/32/64/43/10978388.jpg',
                'https://src.kleos.ru/file/org_image/2021/5/19/file_182dv.jpg',
                'https://onkolog.med.cap.ru/UserFiles21/main/Materials/2023/07/27/blobid1690441298295.jpg',
                'https://i.ytimg.com/vi/46n-4ygw-jE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgRSg7MA8=&amp;rs=AOn4CLBViuiOuy5MpJV_0uf-4HU9hK1NdA',
                'https://thumbs.dreamstime.com/b/доктор-успешный-104121694.jpg'
              ].map((image, index) => (
                <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Фото ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}