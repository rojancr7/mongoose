import mongoose from "mongoose";

const subTodos = new mongoose.Schema({
    content: {
        type: String,
        requried: true,

    },
complete:{
    type: Boolean,
    default: false,
},
createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
},{timesStamps:true});

export const SubTodos = mongoose.model('SubTodo', subTodos);