import { ReactElement } from 'react';

export type Icon = ReactElement;

export interface Service {
  title: string;
  description: string;
  icon: Icon;
}

export interface UseCase {
    title: string;
    description: string;
    icon: Icon;
    className: string;
}

export interface TechItem {
  name: string;
  description: string;
  icon: Icon;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
