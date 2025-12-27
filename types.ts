
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Dulce' | 'Salado' | 'Panificados';
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}
