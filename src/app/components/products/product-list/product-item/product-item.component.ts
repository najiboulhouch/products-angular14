import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductsActionsTypes} from "../../../../state/product.state";
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productInput? : Product;
  @Output() productItemEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  ngOnInit(): void {
  }

  onSelectProduct(product: Product) {
    this.productItemEventEmitter.emit({type :ProductsActionsTypes.SELECT_PRODUCT , payLoad : product})
  }

  onDeleteProduct(product: Product) {
    this.productItemEventEmitter.emit({type :ProductsActionsTypes.DELETE_PRODUCT , payLoad : product})

  }

  onUpdateProduct(product: Product) {
    this.productItemEventEmitter.emit({type :ProductsActionsTypes.EDIT_PRODUCT , payLoad : product})

  }
}
