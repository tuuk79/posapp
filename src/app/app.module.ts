import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatDialogModule, MatDialog, MatDialogRef } from '@angular/material';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';
import { HeaderComponent } from './header/header.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';

const appRoutes: Routes = [
	{ path: '', component: ProductsComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		AdminComponent,
		ProductsComponent,
		HeaderComponent,
		AddProductDialogComponent
	],
	entryComponents: [
		AddProductDialogComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatDialogModule,
		RouterModule.forRoot(
			appRoutes
			// { enableTracing: true }
		)
	],
	providers: [ProductsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
