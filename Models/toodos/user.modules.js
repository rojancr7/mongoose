import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            requried: true,
            unique: true,
            lowerCase: true,
        },
        email: {
            type: String,
            requried: true,
            unique: true,
            lowerCase: true,
        },
        password:{
            type: String,
            requried: true,
            hash: true,

        }
    }, {timesSamps:true}
)

export const User = mongoose.model("User", userSchema)