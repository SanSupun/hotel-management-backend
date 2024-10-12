import mongoose from "mongoose";


const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const category = mongoose.model("categories",categorySchema)

export default category; 