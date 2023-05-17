import { useContext } from "react";

import { Products } from "@/types/types";
import { FiltersContext } from "@/contexts/filtersContext/filtersContext";

//Sin context
// const useFilters = () => {
//   const [products] = useState(initialState);
//   const [filter, setFilter] = useState({s
//     category: "all",
//     minPrice: 0,
//   });

//   //filtro categoria precio
//   const filterProducts = (products) => {
//     return products.filter((product) => {
//       return (
//         product.price > filter.minPrice &&
//         (filter.category === "all" || product.category === filter.category)
//       );
//     });
//   };

//   const filteredProducts = filterProducts(products);

//   return { filteredProducts, setFilter, filters };
// };

//Con context
const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  //filtro categoria precio
  const filterProducts = (products: Products[]) => {
    return products.filter((product) => {
      return (
        product.price > filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { setFilters, filters, filterProducts };
};

export default useFilters;
