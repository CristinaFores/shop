import { initialCart, reducer } from "@/reducers/cartReducer";
import { ActionTypesCart } from "@/reducers/types";
import { Product, Products } from "@/types/types";
import { createContext, useReducer, useState } from "react";
import { CartContextProps, CartProviderProps } from "./types";

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialCart);

  const addToCart = (product: Products) => {
    dispatch({ type: ActionTypesCart.ADD_TO_CART, payload: product });
  };

  const removeProductFromCart = (product: Product) => {
    dispatch({ type: ActionTypesCart.REMOVE_FROM_CART, payload: product });
  };

  const removeQuantity = (product: Product) => {
    dispatch({ type: ActionTypesCart.REMOVE_FROM_QUANTITY, payload: product });
  };
  const clearCart = () => {
    dispatch({ type: ActionTypesCart.CLEAR_CART });
  };

  return {
    state,
    addToCart,
    removeProductFromCart,
    clearCart,
    removeQuantity,
  };
};

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const { state, addToCart, removeProductFromCart, clearCart, removeQuantity } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
