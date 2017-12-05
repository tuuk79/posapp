import { Component, Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductsService } from './services/products.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	products;

	constructor(private productService: ProductsService) { }

	ngOnInit() {
		this.productService.currentProducts
			.subscribe(data => {
				this.products = data;
				console.log('app component just got notified of new products');
			});
	}
}
