import {Product, Review} from '../model/product';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/auction/products')
      .pipe(map(data => {
        const productList = data['products'];
        return productList.map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          rating: product.rating,
          image: product.image,
          owner : product.owner
        }));
        }
      ));

    //  return products.map(p => new Product(p.id, p.name, p.image, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/auction/products/' + productId)
      .pipe(map(data => {
          return data;
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }


  addReviewRequest(review: Review): Observable<Review> {
    console.log(review);
    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Review>('http://localhost:8080/auction/reviews', review , {headers: myHeaders} )
      .pipe(map(data => {
          return data;
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }

 //   return products.find(o => o.id === productId);


  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }

  getAny3ProductsImages(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/auction/products/random/images')
      .pipe(map(data => {
          return data;
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }

  addProduct(nameUI: string, descriptionUI: string, priceUI: number) {
    {
      const body = {name: nameUI, description: descriptionUI,  price: priceUI};
      const myHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.post<Review>('http://localhost:8080/auction/products', body , {headers: myHeaders} )
        .pipe(map(data => {
            return data;
          }),
          catchError(err => {
            console.log(err);
            return throwError(err);
          }));
    }
  }
}
