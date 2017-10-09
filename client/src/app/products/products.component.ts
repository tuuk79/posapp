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

	productFrom: FormGroup;

	constructor(private productsService: ProductsService) {}

	ngOnInit() {
		this.products = this.productsService.getProducts();
		this.productFrom = new FormGroup({});
	}
}
