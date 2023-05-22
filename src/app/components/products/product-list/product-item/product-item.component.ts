import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductsActionsTypes} from "../../../../state/product.state";
import {Product} from "../../../../models/product.model";
import {EventDriverService} from "../../../../services/event.driver.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productInput? : Product;
 // @Output() productItemEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  ngOnInit(): void {
  }

  constructor(private evenDrivenService : EventDriverService) {
  }



  onSelectProduct(product: Product) {
    this.evenDrivenService.publishEvent({type :ProductsActionsTypes.SELECT_PRODUCT , payLoad : product})
  }

  onDeleteProduct(product: Product) {
    console.log(product);
    this.evenDrivenService.publishEvent({type :ProductsActionsTypes.DELETE_PRODUCT , payLoad : product})

  }

  onUpdateProduct(product: Product) {
    this.evenDrivenService.publishEvent({type :ProductsActionsTypes.EDIT_PRODUCT , payLoad : product})

  }
}
