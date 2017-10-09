import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './list/list.component';
import { ProductsService } from './services/products.service';

const appRoutes: Routes = [
	{ path: 'admin', component: AdminComponent },
	{ path: 'product', component: ProductsComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ValueComponent,
		AdminComponent,
		ProductsComponent,
		ListComponent,
		ReactiveFormsModule
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(
			appRoutes,
			// { enableTracing: true }
		)
	],
	providers: [ProductsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
