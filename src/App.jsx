import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import Header from "./components/Header";
import Filters from "./components/Filters";

function App() {
  const [products, setProducts] = useState(initialProducts);

  //creamos un estado de dos posiciones
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  //le pasamos todos los productos y filtramos los productso qeu cumplan esta condicion, devolviendo true los que cumplan
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  //productos filtrados
  const filteredProducts = filterProducts(products);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-row ">
        <div className="w-[20%]">
          {/* le pasamos el filtro price */}
          <Filters onChange={setFilters} />
        </div>
        <div className="w-[80%]">
          <Products products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
