import { Product } from "@/types/types";

export enum ActionTypesCart {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  REMOVE_FROM_QUANTITY = "REMOVE_FROM_QUANTITY",
  CLEAR_CART = "CLEAR_CART",
}

export interface ActionCart {
  type: ActionTypesCart;
  payload?: unknown;
}

export interface ADD_TO_CART extends ActionCart {
  type: ActionTypesCart.ADD_TO_CART;
  payload: Product;
}

export interface REMOVE_FROM_CART extends ActionCart {
  type: ActionTypesCart.REMOVE_FROM_CART;
  payload: Product;
}

export interface REMOVE_FROM_QUANTITY extends ActionCart {
  type: ActionTypesCart.REMOVE_FROM_QUANTITY;
  payload: string;
}
