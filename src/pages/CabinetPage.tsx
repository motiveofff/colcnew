import React, { useState } from 'react';

interface CabinetPageProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onLogout: () => void;
}

interface Appointment {
  service: string;
  doctor: string;
  date: string;
  time: string;
}

export default function CabinetPage({ user, onLogout }: CabinetPageProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState<Appointment>({
    service: '',
    doctor: '',
    date: '',
    time: ''
  });

  const services = ['Терапевт', 'Стоматология', 'Педиатрия', 'Хирургия', 'Анализы'];
  const doctors = ['Иванов И.И.', 'Петрова А.В.', 'Смирнов К.П.', 'Васильева Е.Н.'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.service && formData.doctor && formData.date && formData.time) {
      setAppointments([...appointments, formData]);
      setFormData({ service: '', doctor: '', date: '', time: '' });
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Личный кабинет пациента</h2>
          <button
            onClick={onLogout}
            className="text-red-600 hover:underline"
          >
            Выйти
          </button>
        </div>

        <div className="space-y-4 text-gray-700 mb-8">
          <p><strong>Имя:</strong> {user.firstName}</p>
          <p><strong>Фамилия:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
        </div>

        {/* Запись на услугу */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Запись на услугу</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Выберите услугу</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              >
                <option value="">-- Выберите --</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Выберите врача</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              >
                <option value="">-- Выберите --</option>
                {doctors.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Дата</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Время</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Записаться
            </button>
          </form>
        </div>

        {/* Мои записи */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Мои записи</h3>
          {appointments.length > 0 ? (
            <ul className="space-y-2 text-gray-600">
              {appointments.map((a, i) => (
                <li key={i} className="border p-3 rounded bg-gray-50">
                  <p><strong>Услуга:</strong> {a.service}</p>
                  <p><strong>Врач:</strong> {a.doctor}</p>
                  <p><strong>Дата:</strong> {a.date}</p>
                  <p><strong>Время:</strong> {a.time}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Нет активных записей</p>
          )}
        </div>

        {/* Результаты анализов */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Результаты анализов</h3>
          <p className="text-gray-500">Нет доступных результатов</p>
        </div>

        {/* История посещений */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">История посещений</h3>
          <p className="text-gray-500">Прошлых записей к врачу не найдено</p>
        </div>
      </div>
    </div>
  );
}
