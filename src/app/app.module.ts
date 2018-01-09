import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';

const appRoutes: Routes = [
	{ path: '', component: ProductsComponent },
	{ path: 'admin', component: AdminComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		AdminComponent,
		ProductsComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		RouterModule.forRoot(
			appRoutes,
			// { enableTracing: true }
		)
	],
	providers: [ProductsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
