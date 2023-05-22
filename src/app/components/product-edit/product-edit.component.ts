import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsActionsTypes} from "../../state/product.state";
import {EventDriverService} from "../../services/event.driver.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productNumber : number ;
  productFormGroup? : FormGroup;
  submitted: boolean = false;

  constructor(private activatedRoute : ActivatedRoute,
              private productService : ProductsService,
              private eventDrivenService:EventDriverService,
              private fb : FormBuilder) {
    this.productNumber = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getOneProduct(this.productNumber).subscribe(
      product => this.productFormGroup =  this.fb.group({
        id : [product.id , Validators.required],
        name : [ product.name , Validators.required],
        price : [ product.price , Validators.required],
        quantity : [ product.quantity , Validators.required],
        selected : [ product.selected , Validators.required],
        available : [ product.available , Validators.required],
      })
    )
  }

  onUpdateProduct() {
    this.productService.updateProduct(this.productFormGroup?.value).subscribe(
        data => {
          this.eventDrivenService.publishEvent({type : ProductsActionsTypes.PRODUCT_ADDED}),
            alert("Success Product updated")}
      )
  }
}
