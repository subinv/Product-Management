import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpace } from './shared/convert-to-space';
import { StarComponentComponent } from './shared/star-component/star-component.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path:'welcome',component:HomeComponent},{path:'',component:HomeComponent},
    {path:"product",component:ProductListComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
