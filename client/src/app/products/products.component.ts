import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productFrom: FormGroup;
  product: any = new Product();

  constructor() { }

  ngOnInit(): void {
  	this.product = new FormGroup();
  }

}
