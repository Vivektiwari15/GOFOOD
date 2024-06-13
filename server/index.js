require("./database/connection/connection")
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 2000

// using json so it allows json data to enter in the body
app.use(express.json())

// installing cors to get request from banckned
app.use(cors())

// use diffrent file in index.js
app.use("",require("./routes/authentication"))
app.use("",require("./routes/foodData"))





// listening to a port
app.listen(port,()=>{
    console.log(port)
})