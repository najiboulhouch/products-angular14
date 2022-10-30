import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductsActionsTypes} from "../../../state/product.state";
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productsInput$: Observable<AppDataState<Product[]>> | null = null  ;
  @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  readonly dataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(product: Product) {
      this.productEventEmitter.emit({type :ProductsActionsTypes.SELECT_PRODUCT , payLoad : product});
  }

  onDeleteProduct(product: Product) {
    this.productEventEmitter.emit({type :ProductsActionsTypes.DELETE_PRODUCT , payLoad : product});

  }

  onUpdateProduct(product: Product) {
    this.productEventEmitter.emit({type :ProductsActionsTypes.EDIT_PRODUCT , payLoad : product});

  }

  onActionEvent($event: ActionEvent) {
        this.productEventEmitter.emit($event);
  }
}
