import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductsActionsTypes} from "../../../state/product.state";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
      this.productEventEmitter.emit({type: ProductsActionsTypes.GET_ALL_PRODUCTS});
  }

  onSelectedProducts() {
    this.productEventEmitter.emit({type :ProductsActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onAvailableProducts() {
    this.productEventEmitter.emit({type : ProductsActionsTypes.GET_AVAILABLE_PRODUCTS});

  }

  onNewProduct() {
    this.productEventEmitter.emit({type : ProductsActionsTypes.NEW_PRODUCT});

  }

  onSearchProduct(dataForm: any) {
    this.productEventEmitter.emit({type : ProductsActionsTypes.SEARCH_PRODUCTS , payLoad : dataForm});

  }
}
