import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const { item } = props;

  return (
    <div>
      <div className="bg-white rounded shadow overflow-hidden group">
        <div className="relative" style={{ height: "150px" }}>
          <img src={item.image[0]} alt="" style={{ width: "100%", height: "100%" }} />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <Link
              to="/shop"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i className="fas fa-search"></i>
            </Link>
            <span
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center
              hover:bg-gray-800 transition"
            >
              <i className="far fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <Link to={`/product-details/${item.id}`}>
            <p className="uppercase font-medium text-l text-gray-800 hover:text-primary transition">{item.name}</p>
          </Link>
          <p className="text-xs text-gray-500 mb-2">{item.config}</p>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto">
            <p className="text-l text-primary font-semibold">₦{item.price}</p>
            <p className="text-sm text-gray-400 line-through">₦{item.initialPrice}</p>
          </div>
          <div className="flex items-center">
            <Rating />
            <div className="text-xs text-gray-500 ml-3">
              {`(${item.quantityInStock})`}
              <span className="text-xs text-gray-500 ml-3 uppercase">-{item.condition}</span>
            </div>
          </div>
        </div>
        <Link
          to="/cart"
          className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
