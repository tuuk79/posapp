import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
	selector: 'app-subproduct',
	templateUrl: './subproduct.component.html',
	styleUrls: ['./subproduct.component.css']
})
export class SubproductComponent implements OnInit {

	constructor(private productService: ProductsService) {

	}

	ngOnInit() {
	}

	updateProducts() {
		console.log('refreshing products');
		this.productService.getProducts();
	}

}
