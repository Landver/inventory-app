import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/product.models';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
