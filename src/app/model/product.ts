import {User} from './user';

export class Product {

  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  owner: User;
  categories: Array<string>;

  constructor() {
  }
}

export class Review {
  id: number;
  productId: number;
  timestamp: Date;
  reviewer: User;
  rating: number;
  comment: string;

  constructor() {
  }
}
