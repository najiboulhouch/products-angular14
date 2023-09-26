import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductsActionsTypes} from "../../../state/product.state";
import {EventDriverService} from "../../../services/event.driver.service";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  //@Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor(private eventDrivenService : EventDriverService) { }

  ngOnInit(): void {
  }

  

  onGetAllProducts() {
    // Send event to parent component
    //this.productEventEmitter.emit({ type : ProductsActionsTypes.GET_ALL_PRODUCTS});

      this.eventDrivenService.publishEvent(
      {type: ProductsActionsTypes.GET_ALL_PRODUCTS});
  }

  onSelectedProducts() {
    this.eventDrivenService.publishEvent({type :ProductsActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onAvailableProducts() {
    this.eventDrivenService.publishEvent({type : ProductsActionsTypes.GET_AVAILABLE_PRODUCTS});

  }
 
  onNewProduct() {
    this.eventDrivenService.publishEvent({type : ProductsActionsTypes.NEW_PRODUCT});

  }

  onSearchProduct(dataForm: any) {
    this.eventDrivenService.publishEvent({type : ProductsActionsTypes.SEARCH_PRODUCTS , payLoad : dataForm});

  }
}
