export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  minPrice?: number;
  category: string;
  description?: string;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  images?: string[];
  quantity?: number;
}

export interface Products extends Product {
  products?: Product[];
  quantity?: number;
}
