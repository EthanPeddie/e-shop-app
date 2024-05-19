// types/types.ts

export interface Product {
  _id: { $oid: string };
  image: string;
  brand: string;
  price: number;
  numReviews: number | null;
  isFeatured: boolean;
  name: string;
  description: string;
  category: { $oid: string };
  countInStock: number;
  __v: number;
  rating?: number;
}
