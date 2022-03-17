const express = require("express")
const server = express()
const morgan = require("morgan")
//midlewear
//* always use the .use method
//it takes 2 params
//1. the first param is optional
//the first param is a route path

/**
 * 2.callback fucntion
 * 
 * what is next? 
 *  you need to call next or send()
 */
server.use(express.json())
server.use(morgan("dev"))//shows bugs in the console


//routes
server.use("/badGuys", require("./routes/badguyRouter.js"))
server.use("/goodGuys", require("./routes/goodguyRouter.js"))



server.listen(9000, ()=>{
    console.log("its litdd")
})