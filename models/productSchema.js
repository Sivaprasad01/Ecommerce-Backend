//import mongoose 
const mongoose=require('mongoose')

//define schema for product collection 

const productSchema=new mongoose.Schema({

    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    rating:{
        rate:{
            type:Number,
            required:true,
        },
        count:{
            type:Number,
            required:true,
        }
   
    }

})

//create a model to store data 
const products=new mongoose.model("products",productSchema)      //has to be plural-(wishlistS)


//export model
module.exports = products