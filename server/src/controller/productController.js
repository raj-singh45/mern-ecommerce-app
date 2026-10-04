import productModel from "../model/product.model.js";

export const getProductsController = async (req, res) => {
  const product = await productModel.find();

  if (!product || product.length === 0) {
    return res.status(404).json({
      message: "Products is empty",
    });
  }

  res.status(200).json({
    message: "Product fetch successfully",
    data: {
      product,
    },
  });
};

export const createProductsController = async (req, res) => {
  const { title, description, url } = req.body;

  const newProduct = await productModel.create({
    title,
    description,
    image: url,
  });
  res.status(201).json({
    data: {
      product: {
        title: newProduct.title,
        description: newProduct.description,
        image: newProduct.image,
      },
    },
  });
};

export const deleteProductsController = async (req, res) => {
  const { id } = req.params;
  await productModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "product deleted succesfully",
  });
};

export const updateProductsController = async (req, res) => {
  const { title, description, url } = req.body;
  const { id } = req.params;

  const updatedProduct = await productModel.findByIdAndUpdate(
    id,
    {
      title,
      description,
      image: url,
    },
    {
      new: true,
    },
  );

  if (!updatedProduct) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.status(201).json({
    message: "product update successfully",
    data: {
      updatedProduct,
    },
  });
};
