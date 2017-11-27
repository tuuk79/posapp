import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

	constructor(private http: Http) { }

	getProducts(): Observable<any> {
		// const url = 'assets/mock-products.json';
		const url = 'http://localhost:5000/api/products';
		return this.http.get(url);
	}
}
