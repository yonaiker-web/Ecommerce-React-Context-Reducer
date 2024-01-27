import React from "react";
import { createContext, useContext, useReducer } from "react";

//creamos el contexto (variable que  tiene el contexto)
export const FiltersContext = createContext();

// export const useGLobalState = ({ children }) => {
//   const context = useContext(FiltersContext);
//   return context;
// };

export function FiltersProvider({ children }) {
  return (
    //creamos el proveedor de todo el contexto y dentor el children o todo lo que va a envolver
    <FiltersContext.Provider
      value={{
        category: "all",
        minPrice: 0,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
