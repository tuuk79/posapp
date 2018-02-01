import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-add-product-dialog',
	templateUrl: './add-product-dialog.component.html',
	styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent {

	constructor(
		public dialogRef: MatDialogRef<AddProductDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

}
