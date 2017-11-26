import { Component, Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductsService } from './services/products.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	@Output() products;

	constructor(private productService: ProductsService) { }

	ngOnInit() {
		this.productService.getProducts()
			.subscribe(response => {
				this.products = response.json();
			});
	}
}
