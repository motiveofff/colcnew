import React, { useState } from 'react';
import { X, Lock, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userData: any) => void;
}

export default function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'register') {
      if (formData.password !== formData.confirmPassword) {
        alert('Пароли не совпадают!');
        return;
      }

      const newUser = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone
      };

      localStorage.setItem('user', JSON.stringify(newUser));
      alert('Регистрация успешна!');
      onLogin(newUser);
      onClose(); // закрытие модалки
      navigate('/cabinet');
    }

    if (mode === 'login') {
      const stored = localStorage.getItem('user');
      if (!stored) {
        alert('Пользователь не найден!');
        return;
      }

      const savedUser = JSON.parse(stored);
      if (
        savedUser.email !== formData.email ||
        savedUser.password !== formData.password
      ) {
        alert('Неверный email или пароль!');
        return;
      }

      onLogin(savedUser);
      onClose(); // закрытие модалки
      navigate('/cabinet');
    }

    if (mode === 'forgot') {
      alert('Письмо с восстановлением отправлено!');
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            {mode === 'login' && 'Вход в личный кабинет'}
            {mode === 'register' && 'Регистрация'}
            {mode === 'forgot' && 'Восстановление пароля'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Mail className="w-4 h-4 inline mr-1" /> Email
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
            </div>

            {mode !== 'forgot' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Lock className="w-4 h-4 inline mr-1" /> Пароль
                </label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
            )}

            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Подтвердите пароль</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium">
              {mode === 'login' && 'Войти'}
              {mode === 'register' && 'Зарегистрироваться'}
              {mode === 'forgot' && 'Восстановить пароль'}
            </button>
          </form>

          <div className="mt-6 space-y-2 text-center">
            {mode === 'login' && (
              <>
                <button onClick={() => setMode('forgot')} className="text-blue-600 hover:text-blue-700 text-sm">Забыли пароль?</button>
                <div className="text-gray-600 text-sm">
                  Нет аккаунта?{' '}
                  <button onClick={() => setMode('register')} className="text-blue-600 hover:text-blue-700">Зарегистрироваться</button>
                </div>
              </>
            )}
            {(mode === 'register' || mode === 'forgot') && (
              <div className="text-gray-600 text-sm">
                Уже есть аккаунт?{' '}
                <button onClick={() => setMode('login')} className="text-blue-600 hover:text-blue-700">Войти</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
