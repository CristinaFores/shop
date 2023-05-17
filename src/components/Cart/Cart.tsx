import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons/Icons";
import styles from "./Cart.module.css";
import Image from "next/image";
import useCart from "@/hooks/useCart";

interface CartItemProps {
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  addToCart: () => void;
  deleteToCart: () => void;
}
const CartItem = ({
  price,
  quantity,
  thumbnail,
  title,
  addToCart,
  deleteToCart,
}: CartItemProps) => {
  return (
    <li>
      <Image src={thumbnail} alt={title} width={500} height={500} />

      <div>
        <strong>{title}</strong>
        <span>{price}</span>
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={deleteToCart}>–</button>
      </footer>
    </li>
  );
};

const Cart = (): JSX.Element => {
  const cartCheckBoxId = useId();

  const { cart, clearCart, addToCart, removeQuantity } = useCart();

  return (
    <>
      <label className={styles["cart-button"]} htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />

      <aside className={styles.cart}>
        <ul>
          {cart?.map((item) => (
            <CartItem
              deleteToCart={() => removeQuantity(item)}
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              addToCart={() => addToCart(item)}
              quantity={item.quantity!}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
