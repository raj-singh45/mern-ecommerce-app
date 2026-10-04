import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 50,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
            minLength: 6
        },
        refreshToken : {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;