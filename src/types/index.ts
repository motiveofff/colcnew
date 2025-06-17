export interface Clinic {
  id: string;
  name: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  specialties: string[];
  doctors: Doctor[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  education: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Review {
  id: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
  clinicId?: string;
}

export interface SlideItem {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
}