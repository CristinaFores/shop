import { useState, useId } from "react";
import styles from "./Filters.module.css";
import useFilters from "@/hooks/useFilters";

const Filters = (): JSX.Element => {
  const { setFilters, filters } = useFilters();

  const minPriceId = useId();
  const categoryId = useId();

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className={styles.filters}>
      <div>
        <label htmlFor={minPriceId}>A partir de:</label>
        <input
          type="range"
          id={minPriceId}
          min={"0"}
          max={"1000"}
          onChange={handlePriceChange}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Categoria</label>
        <select id={categoryId} onChange={handleCategoryChange}>
          <option value="all">Todo</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
