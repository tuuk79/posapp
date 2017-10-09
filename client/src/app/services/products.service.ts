import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
	getProducts(): Product[] {
		const products: Product[] = [
			{ id: 1, name: 'microwave', image: 'Happy Face', price: 4.99 },
			{ id: 2, name: 'refrigerator', image: 'Sad Face', price: 9.99 }
		];

		return products;
	}
}
