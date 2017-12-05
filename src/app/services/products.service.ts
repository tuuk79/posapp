import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

	private products = new BehaviorSubject<Product[]>([]);
	currentProducts = this.products.asObservable();

	constructor(private http: Http) { }

	getProducts() {
		const url = 'assets/mock-products.json';
		// const url = 'http://localhost:5000/api/products';

		this.http.get(url)
			.subscribe(data => {
				const products = data.json();
				this.products.next(products);
				console.log('just emitted new products!');
			});
	}
}
