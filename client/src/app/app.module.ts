import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
	{ path: 'admin', component: AdminComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ValueComponent,
		AdminComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(
			appRoutes,
			// { enableTracing: true }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
