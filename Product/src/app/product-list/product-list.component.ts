import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { 
    this.filteredProducts = this.products;
    this.listFilter = "cart";
   }

  ngOnInit() {
  }
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  products: IProduct[] = [{
    productId: 1, productName: "Golden Cart",
    productCode: "GDN-2201", releaseDate: "March 2018",
    description: "Just check", price: 32.98899,
    starRating: 4.2,
    imageUrl: "https://openclipart.org/download/298050/dog-graphics-publicdomainvectors.svg"
  },{
    productId: 1, productName: "xxxxx",
    productCode: "GDN-2201", releaseDate: "March 2018",
    description: "Just check", price: 32.98899,
    starRating: 4.2,
    imageUrl: "https://openclipart.org/download/298050/dog-graphics-publicdomainvectors.svg"
  }];
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log("gtrds",this._listFilter);
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
