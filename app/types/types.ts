interface ObjectId {
  $oid: string;
}

export interface Product {
  _id: ObjectId;
  image?: string;
  brand?: string;
  price?: number;
  rating?: number;
  numReviews?: number;
  isFeatured?: boolean;
  name?: string;
  description?: string;
  category?: ObjectId;
  countInStock?: number;
  __v: number;
}
