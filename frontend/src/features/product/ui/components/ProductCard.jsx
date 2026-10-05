import React from "react";
import { useProduct } from "../../hooks/useProduct";

const ProductCard = ({ product , deleteProduct,updateProduct}) => {

  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-3">
      <img
        src={product.image}
        alt={product.title}
        className="h-20 w-20 rounded-md object-cover"
      />

      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {product.description}
        </p>
      </div>

      <div className="flex gap-2">
        <button onClick={()=>{updateProduct(product)}}   className=" cursor-pointer rounded-md border px-3 py-1.5 text-xs">
          Edit
        </button>

        <button  onClick={()=>{deleteProduct(product._id)}}    className=" cursor-pointer rounded-md bg-red-500 px-3 py-1.5 text-xs text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;