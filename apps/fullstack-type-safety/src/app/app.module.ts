import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiProductsModule } from '@fullstack-type-safety/ui/products';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiProductsModule],
  providers: [{ provide: 'environment', useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
