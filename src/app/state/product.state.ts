export interface ActionEvent{
  type : ProductsActionsTypes,
  payLoad? : any,
}

export enum ProductsActionsTypes{
  GET_ALL_PRODUCTS= "[Product] Get All products",
  GET_SELECTED_PRODUCTS= "[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS= "[Product] Get Available products",
  SEARCH_PRODUCTS= "[Product] Search products",
  NEW_PRODUCT= "[Product] New product",
  DELETE_PRODUCT= "[Product] Delete product",
  SELECT_PRODUCT= "[Product] Select product",
  EDIT_PRODUCT= "[Product] Edit product",
  PRODUCT_ADDED= "[Product] product added",
  EDIT_UPDATED= "[Product] product updated",

}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export  interface AppDataState<T> {
    dataState? : DataStateEnum,
    data? : T ,
    errorMessage? : string
}
