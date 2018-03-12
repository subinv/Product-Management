import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/do";

@Injectable()
export class ProductService {
    constructor(private _http: HttpClient) {

    }
    private _productUrl = './api/products/products.json';
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}