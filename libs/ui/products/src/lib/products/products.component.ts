import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'fullstack-type-safety-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public data;
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _productService: ProductsService
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required]],
      sku: ['', [Validators.required]],
    });

    this._getProducts();
  }

  public submit() {
    this._productService.addProduct(this.form.value).subscribe(() => {
      this.form.reset();
      this._getProducts();
    });
  }

  private _getProducts() {
    this._productService
      .getProducts()
      .pipe(take(1))
      .subscribe((data) => (this.data = data));
  }
}
