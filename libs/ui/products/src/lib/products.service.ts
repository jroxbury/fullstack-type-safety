import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment } from '@fullstack-type-safety/types';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _http: HttpClient,
    @Inject('environment') private _environment: Environment
  ) {}

  public getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._environment.api}/products`);
  }

  public addProduct(product: Product) {
    return this._http.post(`${this._environment.api}/products`, product);
  }
}
