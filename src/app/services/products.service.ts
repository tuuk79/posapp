import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductsService {

	private products = new Subject<Product[]>();
	currentProducts = this.products.asObservable();

	constructor(private http: Http) { }

	getProducts() {
		const url = 'assets/mock-products.json';
		// const url = 'http://localhost:5000/api/products';

		const subscription = this.http.get(url);

		subscription.subscribe(data => {
			const products = data.json();
			this.products.next(products);
		});
	}
}
