export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'kılıç' | 'zırh' | 'araç' | 'kozmetik' | 'diğer';
  features?: string[];
  stock?: number;
  discount?: number;
  stats?: {
    damage?: number;
    defense?: number;
    speed?: number;
    durability?: number;
  };
} 