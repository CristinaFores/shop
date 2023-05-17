import { Product, Products } from "@/types/types";

export interface CartContextProps {
  cart: Products[];
  addToCart: (product: Products) => void;
  clearCart: () => void;
  removeProductFromCart: (product: Product) => void;
  removeQuantity: (product: Product) => void;
}
export interface CartProviderProps {
  children: JSX.Element | JSX.Element[];
}
