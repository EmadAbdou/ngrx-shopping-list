import { Action } from '@ngrx/store'
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Success',
  LOAD_SHOPPING_FALIURE = '[SHOPPING] Load Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAIlURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAIlURE = '[SHOPPING] Delete Item Failure',

}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: Array<ShoppingItem>) { }
}

export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FALIURE;
  constructor(public payload: Error) { }
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) { }
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) { }
}

export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAIlURE;
  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
  constructor(public payload: string) { }
}

export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAIlURE;
  constructor(public payload: string) { }
}

export type ShoppingAction =
  LoadShoppingAction |
  LoadShoppingSuccessAction |
  LoadShoppingFailureAction |
  AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction;
