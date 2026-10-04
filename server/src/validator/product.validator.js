import {body,validationResult} from "express-validator"

export const productValidator = [
body("title")
.exists().withMessage("Title is required").bail()
.trim()
.isLength({ min: 3, max: 100 }).withMessage("Title must be between 3 and 100 characters"),

body("description")
.exists().withMessage("Description is required").bail()
.trim()
.isLength({ min: 10, max: 1000 }).withMessage("Description must be between 10 and 100 characters"),

body("url")
.exists().withMessage("image is required").bail()
.trim()
.isURL().withMessage("Image must be a valid URL link"),

(req,res,next)=>{
    const errors = validationResult(req); 
    if(!errors.isEmpty()){
     return res.status(400).json({
        message : "Invalid request" , 
        errors : errors.array()
     })
    }
    next(); 
}
]