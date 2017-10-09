import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	products: Product[];

	productForm: FormGroup;

	constructor(private productsService: ProductsService) {}

	ngOnInit() {
		this.products = this.productsService.getProducts();
		this.productForm = new FormGroup({
			name: new FormControl(),
			price: new FormControl(),
			image: new FormControl()
			});
	}

	save() {

	}
}
