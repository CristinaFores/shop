import { CartContext } from "@/contexts/cartContext/cartContext";
import { useContext } from "react";

const useCart = () => {
  const context = useContext(CartContext);

  // buena practica en custom hooks revisar que el contexto exista
  // si no existe el contexto, es porque no se esta usando dentro del provider el custom hook
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export default useCart;
