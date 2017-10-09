import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
	getProducts(): Product[] {
		const products: Product[] = [
			{ id: 1, name: 'microwave', image: '', price: 0 },
			{ id: 2, name: 'refrigerator', image: '', price: 0 }
		];

		return products;
	}
}