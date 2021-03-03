import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  public async getProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  public async addProduct(@Body() product) {
    return this.productsService.addProduct(product);
  }
}
