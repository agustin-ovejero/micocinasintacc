
import { Product, Review } from './types';

export const COLORS = {
  primary: '#E31E24', // Red from logo
  black: '#1A1A1A',
  white: '#FFFFFF',
  gray: '#F3F4F6'
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Pan de Molde Multisemillado',
    description: 'Textura suave y esponjosa, ideal para tus desayunos.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
    category: 'Panificados'
  },
  {
    id: 2,
    name: 'Tarta Frutal de Estación',
    description: 'Masa quebrada crujiente con crema pastelera y frutas frescas.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bdf7f81b1?q=80&w=800',
    category: 'Dulce'
  },
  {
    id: 3,
    name: 'Docena de Empanadas',
    description: 'Masa casera súper elástica, rellenos gourmet.',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1628102476629-382c99f0be33?q=80&w=800',
    category: 'Salado'
  },
  {
    id: 4,
    name: 'Brownie de Chocolate Intenso',
    description: 'Húmedo, chocolatoso y 100% seguro.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800',
    category: 'Dulce'
  }
];

export const REVIEWS: Review[] = [
  { id: 1, author: 'María García', text: 'Increíble sabor, no parece sin TACC. Los panificados son de otro planeta.', rating: 5 },
  { id: 2, author: 'Juan Pérez', text: 'Excelente atención y calidad. Recomiendo las empanadas de carne.', rating: 5 },
  { id: 3, author: 'Lucía Fernández', text: 'Por fin encontré un lugar donde la pastelería es rica y segura.', rating: 5 }
];
