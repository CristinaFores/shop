import { Products } from "@/types/types";
import { ADD_TO_CART, ActionCart, REMOVE_FROM_CART } from "./types";

export const initialCart: Products[] = [];

export const reducer = (state: Products[], action: ActionCart) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === (action as ADD_TO_CART).payload.id
      );

      if (productInCartIndex >= 0) {
        return [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity! + 1,
          },
          ...state.slice(productInCartIndex + 1),
        ];
      }
      return [...state, { ...(action as ADD_TO_CART).payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART": {
      return state.filter(
        (item) => item.id !== (action as REMOVE_FROM_CART).payload.id
      );
    }

    case "REMOVE_FROM_QUANTITY": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === (action as REMOVE_FROM_CART).payload.id
      );

      if (productInCartIndex >= 0) {
        if (state[productInCartIndex].quantity === 1) {
          return state.filter(
            (item) => item.id !== (action as REMOVE_FROM_CART).payload.id
          );
        }

        return [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity! - 1,
          },
          ...state.slice(productInCartIndex + 1),
        ];
      }

      return state;
    }

    case "CLEAR_CART": {
      return initialCart;
    }
  }

  return state;
};
