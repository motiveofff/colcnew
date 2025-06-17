import { Clinic, Doctor, Service, Review, SlideItem } from '../types';

export const clinics: Clinic[] = [
  {
    id: '1',
    name: 'ГОБУЗ "КОЛЬСКАЯ ЦЕНТРАЛЬНАЯ РАЙОННАЯ БОЛЬНИЦА"',
    description: 'Центральная районная больница, предоставляющая полный спектр медицинских услуг',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: 'г. Кола, ул. Центральная, 15',
    phone: '+7 (815) 553-10-20',
    specialties: ['Терапия', 'Хирургия', 'Педиатрия', 'Кардиология'],
    doctors: [
      {
        id: '1',
        name: 'Иванов Сергей Петрович',
        specialty: 'Главный врач, кардиолог',
        image: 'https://images.pexels.com/photos/612807/pexels-photo-612807.jpeg?auto=compress&cs=tinysrgb&w=400',
        experience: '15 лет',
        education: 'СЗГМУ им. И.И. Мечникова',
        description: 'Опытный кардиолог с многолетним стажем работы'
      }
    ]
  },
  {
    id: '2',
    name: 'Поликлиника №1',
    description: 'Амбулаторно-поликлиническое учреждение',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
    address: 'г. Кола, ул. Советская, 28',
    phone: '+7 (815) 553-15-30',
    specialties: ['Терапия', 'Педиатрия', 'Неврология', 'Офтальмология'],
    doctors: []
  }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Терапия',
    description: 'Общая терапевтическая помощь, диагностика и лечение внутренних болезней',
    icon: 'stethoscope'
  },
  {
    id: '2',
    name: 'Кардиология',
    description: 'Диагностика и лечение заболеваний сердечно-сосудистой системы',
    icon: 'heart'
  },
  {
    id: '3',
    name: 'Педиатрия',
    description: 'Медицинская помощь детям от рождения до 18 лет',
    icon: 'baby'
  },
  {
    id: '4',
    name: 'Хирургия',
    description: 'Оперативное лечение различных заболеваний',
    icon: 'scissors'
  },
  {
    id: '5',
    name: 'Неврология',
    description: 'Диагностика и лечение заболеваний нервной системы',
    icon: 'brain'
  },
  {
    id: '6',
    name: 'Офтальмология',
    description: 'Диагностика и лечение заболеваний глаз',
    icon: 'eye'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    patientName: 'Анна М.',
    rating: 5,
    comment: 'Прекрасный персонал, качественное обслуживание. Врачи внимательные и профессиональные.',
    date: '2024-01-15'
  },
  {
    id: '2',
    patientName: 'Михаил С.',
    rating: 5,
    comment: 'Современное оборудование, быстрая диагностика. Очень доволен качеством медицинской помощи.',
    date: '2024-01-10'
  },
  {
    id: '3',
    patientName: 'Елена К.',
    rating: 4,
    comment: 'Хорошая клиника, вежливый персонал. Записаться на прием можно быстро и удобно.',
    date: '2024-01-08'
  }
];

export const slides: SlideItem[] = [
  {
    id: '1',
    title: 'Современная диагностика',
    description: 'Используем передовое медицинское оборудование для точной диагностики',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Узнать больше',
    link: '/services'
  },
  {
    id: '2',
    title: 'Профессиональные врачи',
    description: 'Наша команда - это высококвалифицированные специалисты с большим опытом',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Наши врачи',
    link: '/doctors'
  },
  {
    id: '3',
    title: 'Забота о пациентах',
    description: 'Индивидуальный подход к каждому пациенту и комфортные условия лечения',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
    buttonText: 'Записаться',
    link: '/appointment'
  }
];