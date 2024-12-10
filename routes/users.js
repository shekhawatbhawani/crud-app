const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/school");
const userDAtaSchema =  mongoose.Schema({
  name:String,
  email:String,
  password:Number,
  contact:Number
}) 
module.exports = mongoose.model("userData",userDAtaSchema);
