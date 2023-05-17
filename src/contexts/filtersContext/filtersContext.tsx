import { Products } from "@/types/types";
import { createContext, useState } from "react";
import { FiltersContextProps } from "./types";

export const FiltersContext = createContext<FiltersContextProps>(
  {} as FiltersContextProps
);

interface FiltersProviderProps {
  children: JSX.Element | JSX.Element[];
}

const FiltersContextProvider = ({ children }: FiltersProviderProps) => {
  const [filters, setFilters] = useState<{
    category: string;
    minPrice: number;
  }>({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        setFilters,
        filters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
