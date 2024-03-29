import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {EventDriverService} from "../../services/event.driver.service";
import {ProductsActionsTypes} from "../../state/product.state";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup? : FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder : FormBuilder ,
              private eventDrivenService : EventDriverService,
              private productService : ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      name : ["" , Validators.required ],
      price : [0 , Validators.required ],
      quantity : [0 , Validators.required],
      selected: [true, Validators.required],
      available :[true , Validators.required]
    });
  }




  // @ts-ignore
  onSaveProduct()  {
    this.submitted = true;
    if(this.productFormGroup?.invalid) return false ;
    this.productService.saveOneProduct(this.productFormGroup?.value).subscribe(
      data => {
        this.eventDrivenService.publishEvent({type : ProductsActionsTypes.PRODUCT_ADDED}),
          alert('Success saved')}
      );
  }
}
