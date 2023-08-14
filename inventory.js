const  mongoose  = require("mongoose");
const schema = mongoose.Schema({
     productId:{
        type :Number,
        required:true
     },
     quantity:{
        type :Number,
        required:true
     }
})
module.exports = mongoose.model('inventory',schema)