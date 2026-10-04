import {Router} from "express"
import { getMe, loginController, logOutController, refreshController, registerController } from "../controller/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/register",registerController)
router.post("/login",loginController)
router.get("/me",authenticate,getMe)
router.get("/refresh-token", refreshController)
router.get("/logout", logOutController)


export default router ; 