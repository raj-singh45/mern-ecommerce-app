import { api } from "../../../api/config/api";

export const productCreateApi = async (productData) => {
  try {
    let res = await api.post("/products/create", productData);
    return res.data;
  } catch (err) {
    console.log("error in productCreateApi", err);
    throw err;
  }
};

export const deleteProductApi = async (id) => {
  try {
    return await api.delete(`/products/delete/${id}`);
  } catch (error) {
    console.log("error in deletecard api ", error);
  }
};

export const getProductsApi = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const updateProductApi = async (editProductId, data) => {
  try {
    return await api.put(`/products/update/${editProductId}`, data);
  } catch (error) {
    console.log("Error in updateProductApi");
  }
};
