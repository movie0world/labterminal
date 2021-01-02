var mongoose=require("mongoose")
mongoose.connect(`mongodb+srv://toqeer_12lab:toqeerali12@cluster0.h1s3r.mongodb.net/Main?retryWrites=true&w=majority`, {useNewUrlParser: true,useUnifiedTopology: true});


let ProductSchema= new mongoose.Schema({
   
    prName:String,
    prCategory:String,
    prPrice:Number,
    prDetails:String,
    prImage:String

},{timestamps:true})

let Product=mongoose.model("LabProduct",ProductSchema)
module.exports={ProductSchema,Product}