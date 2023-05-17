import Image from "next/image";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons/Icons";
import styles from "./ProductsList.module.css";
import { Product, Products } from "@/types/types";
import useCart from "@/hooks/useCart";

interface ProductsListProps {
  products: Products[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  const { addToCart, removeProductFromCart, cart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <>
      <ul className={styles.products}>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                priority={true}
              />
              <div>
                <strong>{product.title}</strong> -${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: isProductInCart ? "#FF6464" : "#46c95c",
                  }}
                  onClick={() => {
                    isProductInCart
                      ? removeProductFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsList;
