export interface ProductList {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
   rating: {
    rate: number;
    count: number;
  };
}