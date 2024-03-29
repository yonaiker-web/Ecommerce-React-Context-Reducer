import React, { useId, useState } from "react";

const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);

    onChange((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };
  return (
    <div className="">
      <div className="form-control w-full p-4">
        {/* el htmlFor nos ayudara como id para el input */}
        <label htmlFor={minPriceFilterId}>Precio Mayor a {minPrice} $</label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          className="range"
          onChange={handleChangeMinPrice}
        />
      </div>

      <div className="">
        <label className="form-control w-full p-4">
          <div className="label">
            <label htmlFor={categoryFilterId} className="label-text">
              Categorias
            </label>
          </div>
          <select
            id={categoryFilterId}
            className="select select-bordered"
            onChange={handleChangeCategory}
          >
            <option disabled selected>
              Categoria
            </option>
            <option value="all">Todas</option>
            <option value="laptops">laptops</option>
            <option value="smartphones">Celulares</option>
            <option value="fragrances">Perfumes</option>
            <option value="skincare">SkinCare</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filters;
