import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  productFrom: FormGroup;
  product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  	this.productFrom = new FormGroup({});
  }

}
