import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { doctors } from '../data/mockData';
import { Phone, Mail, Stethoscope } from 'lucide-react';

export default function DoctorsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {t('Наши врачи') || 'Наши врачи'}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={doc.photo}
                alt={doc.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{doc.name}</h2>
                <p className="text-teal-600 font-medium mb-2">{doc.specialty}</p>
                <p className="text-gray-600 mb-4">{doc.description}</p>

                <div className="flex items-center text-gray-500 mb-2">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  <span className="text-sm">{doc.experience} лет опыта</span>
                </div>

                <div className="flex items-center text-gray-500 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{doc.phone}</span>
                </div>

                <div className="flex items-center text-gray-500">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{doc.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
