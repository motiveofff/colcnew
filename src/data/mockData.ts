import { Clinic, Doctor, Service, Review, SlideItem } from '../types';

export const clinics: Clinic[] = [
  {
    id: '1',
    name: 'ГОБУЗ "КОЛЬСКАЯ ЦЕНТРАЛЬНАЯ РАЙОННАЯ БОЛЬНИЦА"',
    description: 'Центральная районная больница, предоставляющая полный спектр медицинских услуг',
    image: 'https://murmansk.ru/storage/publication/3151a/5157_NpRfV7rDmgRdG69bl5Vd.jpg',
    address: 'г. Кола, ул. Центральная, 15',
    phone: '+7 (815) 553-10-20',
    specialties: ['Терапия', 'Хирургия', 'Педиатрия', 'Кардиология'],
    doctors: [
      {
        id: '1',
        name: 'Иванов Сергей Петрович',
        specialty: 'Главный врач, кардиолог',
        image: 'https://www.mk.ru/upload/entities/2024/08/05/14/articles/detailPicture/60/69/f4/e7/c9077f882bbfeb86a769c945febd450b.jpg',
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
    image: 'https://m.severpost.ru/docs/upload/2025/01/croppedImg_868963032.jpeg',
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
    image: 'https://blog.checkpoint.com/wp-content/uploads/2021/06/iStock-1180547365.jpg',
    buttonText: 'Узнать больше',
    link: '/services'
  },
  {
    id: '2',
    title: 'Профессиональные врачи',
    description: 'Наша команда - это высококвалифицированные специалисты с большим опытом',
    image: 'https://cdn.mknc.ru/contents/albums/preview/2000x2000/14000/14742/preview.jpg',
    buttonText: 'Наши врачи',
    link: '/doctors'
  },
  {
    id: '3',
    title: 'Забота о пациентах',
    description: 'Индивидуальный подход к каждому пациенту и комфортные условия лечения',
    image: 'https://img.gazeta.ru/files3/60/17402060/shutterstock_128-pic_32ratio_900x600-900x600-72299.jpg',
    buttonText: 'Записаться',
    link: '/appointment'
  }
];