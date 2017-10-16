import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	products: Product[];

	productForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private productsService: ProductsService) {}

	ngOnInit() {
		this.products = this.productsService.getProducts();
		this.productForm = this.formBuilder.group({
			name: ["", [Validators.required, Validators.minLength(3)] ],
			price: [0.00, [Validators.required, Validators.min(.01), Validators.max(1000)]],
			image: ''
			});
	}

	save() {

	}
}
