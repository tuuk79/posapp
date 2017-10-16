import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-value',
	templateUrl: './value.component.html',
	styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

	valuesUrl = 'http://localhost:5000/api/values/get';
	values = '';

	constructor(private http: Http) {

	}

	ngOnInit() {
		// this.getValues().subscribe(value => {
		// 	this.values = value;
		// });
	}

	getValues(): Observable<string> {
		return this.http.get(this.valuesUrl)
			.map((res: Response) => res.text());
	}

}
