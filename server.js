const express = require("express")
const server = express()

//midlewear
server.use(express.json())


//routes
server.use("/badGuys", require("./routes/badguyRouter.js"))
server.use("/goodGuys", require("./routes/goodguyRouter.js"))



server.listen(9000, ()=>{
    console.log("its lit")
})