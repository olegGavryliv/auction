export class Product {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>) {
  }
}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}

export class ProductService {
  getProducts(): Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.image, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
     return products.find(o => o.id === productId);

  }

  getReviewsForProduct(productId: number): Review[] {
    return reviews
      .filter(r => r.productId === productId)
      .map(r => new Review(r.id, r.productId, new Date(r.timestamp),
        r.user, r.rating, r.comment));
  }

  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }
}

const reviews = [
  {
    id: 0,
    productId: 0,
    timestamp: '2014-05-20T02:17:00+00:00',
    user: 'User 1',
    rating: 5,
    comment: 'Aenean vestibulum velit id placerat posuere. Praesent...'},
  {
    id: 1,
    productId: 0,
    timestamp: '2014-05-20T02:53:00+00:00',
    user: 'User 2',
    rating: 3,
    comment: 'Aenean vestibulum velit id placerat posuere. Praesent... '
  }];


const products = [
  {
    id: 0,
    title: 'First Product',
    price: 24.99,
    image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
    rating: 4.3,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware']
  },
  {
    id: 1,
    title: 'Second Product',
    price: 64.99,
    image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
    rating: 3.5,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books']
  },
  {
    id: 2,
    title: 'Third Product',
    price: 74.99,
    image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
    rating: 4.2,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics']
  },
  {
    id: 3,
    title: 'Fourth Product',
    price: 84.99,
    image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
    rating: 3.9,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['hardware']
  },
  {
    id: 4,
    title: 'Fifth Product',
    price: 94.99,
    image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
    rating: 5,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware']
  },
  {
    id: 5,
    title: 'Sixth Product',
    price: 54.99,
    image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
    rating: 4.6,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books']
  }
];
