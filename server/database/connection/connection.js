const mongoose = require("mongoose")

// connecting to MongoDB
mongoose.connect("mongodb+srv://Vivektiwari15:Vivek1507@gofood.gidvjtt.mongodb.net/GoFood?retryWrites=true&w=majority").then(()=>{
    console.log("Connected")
})