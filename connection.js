const  mongoose  = require("mongoose");
connectDB = async ()=>{
   await mongoose.connect(process.env.MONGO_DB_KEY)
   console.log("Database connection established")
}
module.exports = connectDB