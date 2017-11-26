import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	products: any;

	constructor(private productsService: ProductsService) { }

	ngOnInit() {
		this.productsService.getProducts()
		.subscribe(response => {
			this.products = response.json();
		});
	}
}
