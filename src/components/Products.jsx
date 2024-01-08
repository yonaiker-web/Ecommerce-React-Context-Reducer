import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-5 pt-5">
      {products.map((product) => (
        <div className="card bg-base-100 shadow-xl" key={product.title}>
          <div className="avatar  mx-auto ">
            <div className="w-[100%]  hover:opacity-75 m-auto  h-auto rounded-xl">
              <img src={product.thumbnail} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{product.title} </h2>
            <div className="stat-value text-xl text-end">{product.price}$</div>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary ">Añadir</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
