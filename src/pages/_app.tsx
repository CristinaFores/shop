import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FiltersContextProvider from "@/contexts/filtersContext/filtersContext";
import { CartContextProvider } from "@/contexts/cartContext/cartContext";
import { ThemeProvider } from "@/contexts/ThemeContext/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CartContextProvider>
        <FiltersContextProvider>
          <Component {...pageProps} />
        </FiltersContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  );
}
