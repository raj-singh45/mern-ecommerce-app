import {Router} from "express"
import { createProductsController, deleteProductsController, getProductsController, updateProductsController,  } from "../controller/productController.js";
import { productValidator } from "../validator/product.validator.js";

const router = Router();

router.get("/", getProductsController);
router.post("/create", productValidator ,createProductsController)
router.put("/update/:id", productValidator,updateProductsController)
router.delete('/delete/:id',deleteProductsController);



export default router 