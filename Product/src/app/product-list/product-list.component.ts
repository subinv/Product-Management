import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      products =>{ this.products = products;
        this.filteredProducts = this.products;
       },
      err => this.erroMessage = <any>err
    );
  }
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  erroMessage: string;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  products: IProduct[];
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {

    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  };

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }
}
