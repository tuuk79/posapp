import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatCardModule } from '@angular/material';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	products;

	constructor(private productService: ProductsService) { }

	ngOnInit() {
		this.productService.currentProducts
			.subscribe(data => {
				this.products = data;
				console.log('products component just got notified of new products');
			});
	}
}
