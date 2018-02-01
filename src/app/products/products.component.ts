import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	products;

	constructor(private productService: ProductsService, public dialog: MatDialog) {
		console.log('getting current products from products service');
		// get current products
		this.productService.currentProducts
			.subscribe(data => {
				console.log(data);
				this.products = data;
			});
	}

	ngOnInit() { }

	addProduct(): void {
		const dialogRef = this.dialog.open(AddProductDialogComponent, {
			width: '250px',
			data: { name: 'Steve Yoo' }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}
