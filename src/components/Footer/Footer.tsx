import useFilters from "@/hooks/useFilters";
import styles from "./Footer.module.css";
import useCart from "@/hooks/useCart";

const Footer = (): JSX.Element => {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className={styles.footer}>
      {JSON.stringify(filters, null, 2)}
      {JSON.stringify(cart, null, 2)}
      <h4>
        Prueba técnica de React ⚛️ － <span>@Cristina</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
};

export default Footer;
