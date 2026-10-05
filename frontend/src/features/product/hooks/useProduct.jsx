import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  deleteProductApi,
  getProductsApi,
  productCreateApi,
  updateProductApi,
} from "../api/productApi";

import { useNavigate } from "react-router";


export const useProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  let navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const productForm = async (data) => {
    try {
      //update logic
      if (editProductId) {
        await updateProductApi(editProductId, data);
        await fetchProducts();
        setEditProductId(null);
        toast.success("Product updated Successfully");
        reset();
      }

      // creation logic
      await productCreateApi(data);
      await fetchProducts();
      toast.success("Product added Successfully");
      reset();
    } catch (error) {
      console.log("error in product form", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await getProductsApi();
      setProductsData(response.data.product);
    } catch (error) {
      console.log("error in fetchProducts", error);
    }
  };

  const updateProduct = async (product) => {
    setEditProductId(product._id);
    reset({
      title: product.title,
      description: product.description,
      url: product.image,
    });
  };

  const deleteProduct = async (id) => {
    try {
      await deleteProductApi(id);
      await fetchProducts();
      toast.success("Product deleted Successfully");
    } catch (error) {
      console.log("error in deletecard", error);
    }
  };

 
  return {
    register,
    handleSubmit,
    errors,
    productForm,
    productsData,
    deleteProduct,
    getProductsApi,
    updateProduct,
    editProductId,
    fetchProducts,
  };
};
