import React, { useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    productForm,
    productsData,
    deleteProduct,
    editProductId,
    updateProduct,
    fetchProducts,
  } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-xl font-semibold text-gray-900">Products</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Product Form */}
          <div className="h-fit rounded-lg border border-gray-200 bg-white p-4">
            <h2 className="mb-4 text-sm font-semibold text-gray-900">
              Add Product
            </h2>

            <form onSubmit={handleSubmit(productForm)} className="space-y-3">
              <input
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 2,
                    message: "Title must be at least 2 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Title cannot exceed 100 characters",
                  },
                })}
                type="text"
                placeholder="Product title"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
              />

              {errors.title && (
                <p className="text-xs text-red-500">{errors.title.message}</p>
              )}

              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
                rows="3"
                placeholder="Description"
                className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
              />

              {errors.description && (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}

              <input
                {...register("url")}
                type="url"
                placeholder="Image URL"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
              />

              {editProductId ? (
                <button
                  type="submit"
                  className="w-full rounded-md cursor-pointer bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  UpdateProduct
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-md cursor-pointer bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Add Product
                </button>
              )}
            </form>
          </div>

          {/* Product List */}
          <div className="space-y-3 lg:col-span-3">
            {productsData.length === 0 ? (
              <p>No products available</p>
            ) : (
              productsData.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
