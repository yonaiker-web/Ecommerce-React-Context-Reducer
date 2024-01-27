import { useContext, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import { IS_DEVELOPMENT } from "./config";
import { FiltersContext } from "./context/filters";

//creamos un customHook que se encargar solo de los filtrados
function useFilters() {
  //creamos un estado de dos posiciones
  // const [filters, setFilters] = useState({
  //   category: "all",
  //   minPrice: 0,
  // });

  const filters = useContext(FiltersContext);

  console.log("filters", filters);

  const setFilters = () => {};

  //le pasamos todos los productos y filtramos los productso qeu cumplan esta condicion, devolviendo true los que cumplan
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  //retornamos el filtro en cuestion, el producto a filtrar, y el estado que actuliza los filtros
  return {
    filters,
    filterProducts,
    setFilters,
  };
}

function App() {
  const [products] = useState(initialProducts);

  //usamos la funcion que filtra y le pasamos
  const { filters, filterProducts, setFilters } = useFilters();
  //productos filtrados
  const filteredProducts = filterProducts(products);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-row pb-10">
          <div className="w-[20%]">
            {/* le pasamos el filtro price */}
            <Filters onChange={setFilters} />
          </div>
          <div className="w-[80%]">
            <Products products={filteredProducts} />
          </div>
        </div>
      </div>
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </div>
  );
}

export default App;
