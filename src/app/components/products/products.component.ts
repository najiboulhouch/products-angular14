import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductsActionsTypes} from "../../state/product.state";
import {Router} from "@angular/router";
import {EventDriverService} from "../../services/event.driver.service";

const deleteThisRecord = "Do you delete this record ? ";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

   products$: Observable<AppDataState<Product[]>> | null = null  ;
   readonly dataStateEnum = DataStateEnum;

  constructor(private productService : ProductsService ,
              private eventDrivenService : EventDriverService,
              private router : Router) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable$.subscribe(
      (actionEvent : ActionEvent) => {
        this.onActionEvent(actionEvent);
      }
    )
  }

  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts()
      .pipe(
        map((data) => ({ dataState  : DataStateEnum.LOADED , data : data })) ,
          startWith({dataState : DataStateEnum.LOADING}),
          catchError(err => of({ dataState : DataStateEnum.ERROR , errorMessage : err.message}))
      );
  }

  onSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts()
      .pipe(
        map((data) => ({ dataState  : DataStateEnum.LOADED , data : data })) ,
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({ dataState : DataStateEnum.ERROR , errorMessage : err.message}))
      );
  }

  onAvailableProducts () {
    this.products$ = this.productService.getAvailableProducts()
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSearchProduct(dataForm: any) {
    this.products$ = this.productService.searchProducts(dataForm.keyword)
      .pipe(
        map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSelectProduct(product: Product) {
    this.productService.selectOneProduct(product).
      subscribe(data => {
        product.selected = data.selected;
    });
  }

  onDeleteProduct(product: Product) {
    let confirmMsg = confirm(deleteThisRecord);
    if(confirmMsg ==true)
    this.productService.deleteOneProduct(product).subscribe(data => {
      this.onGetAllProducts();
    })
  }

  onNewProduct() {
      this.router.navigateByUrl('/new-product');
  }

  onUpdateProduct(product: Product) {
    this.router.navigateByUrl('/edit-product/' + product.id);
  }

  onActionEvent($event: ActionEvent) {
      switch ($event.type) {
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
          this.onGetAllProducts();
          break;
        case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
          this.onSelectedProducts();
          break;
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
          this.onAvailableProducts();
          break;
        case ProductsActionsTypes.NEW_PRODUCT:
          this.onNewProduct();
          break;
        case ProductsActionsTypes.SEARCH_PRODUCTS:
          this.onSearchProduct($event.payLoad);
          break;
        case ProductsActionsTypes.DELETE_PRODUCT:
          this.onDeleteProduct($event.payLoad);
          break;
        case ProductsActionsTypes.EDIT_PRODUCT:
          this.onUpdateProduct($event.payLoad);
          break;
        case ProductsActionsTypes.SELECT_PRODUCT:
          this.onSelectProduct($event.payLoad);
          break;
      }
  }


}
