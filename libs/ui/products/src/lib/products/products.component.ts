import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@prisma/client';
import { Environment } from '@fullstack-type-safety/types';

@Component({
  selector: 'fullstack-type-safety-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  public data$ = this._http.get<Product[]>(`${this._environment.api}/products`);

  constructor(
    private _http: HttpClient,
    @Inject('environment') private _environment: Environment
  ) {}
}
