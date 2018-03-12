import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpace } from './shared/convert-to-space';
import { StarComponentComponent } from './shared/star-component/star-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
