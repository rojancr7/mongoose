import mongoose from "mongoose";

const orderItemsSchema = new mongooseSchema({
    productId:{
        type: mongoose.Schema.Type.OrderID,
        ref: "Product"
    },
    quantity:{
        requried: true,
        type: Number,
    }
})


const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    costomer:{
        type: mongoose.Schema.Type.ObjectID,
        ref: "User",
    },
    orderItems: {
        type: [orderItemsSchema]
    },
    adress:{
        type: String,
        requried: true,

    },
    status:
    {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, {timestamps: true});

export const Order = mongoose.model("Order", orderSchema);