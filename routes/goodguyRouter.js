const express = require("express")
const goodguyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const goodGuys = [
    {firstName: "mike", lastName: "smith", living: true, killPrice: 500, streetName: "lil dino", _id: uuidv4()},
    {firstName: "frank", lastName: "black", living: true, killPrice: 1500, streetName: "stinky", _id: uuidv4()},
    {firstName: "steve", lastName: "green", living: true, killPrice: 5200, streetName: "tommy 2 toes", _id: uuidv4()},
    {firstName: "jim", lastName: "red", living: true, killPrice: 5500, streetName: "chip", _id: uuidv4()},
    {firstName: "stan", lastName: "purple", living: true, killPrice: 54300, streetName: "lil bluetooth", _id: uuidv4()},
    {firstName: "gill", lastName: "pitts", living: false, killPrice: 50, streetName: "tiny", _id: uuidv4()},
    {firstName: "magic", lastName: "james", living: false, killPrice: 1500, streetName: "lil ringtone", _id: uuidv4()},
    {firstName: "dilo", lastName: "luca", living: false, killPrice: 5500, streetName: "nba 3 point line", _id: uuidv4()},
    {firstName: "jeff", lastName: "davis", living: false, killPrice: 6600, streetName: "fires wit it", _id: uuidv4()},
    {firstName: "rico", lastName: "smith", living: false, killPrice: 5, streetName: "hut hut", _id: uuidv4()}
]
//get all
goodguyRouter.get("/", (req, res)=>{
    res.send(goodGuys)
})
/**git 1 by id - params
 * 1. use the pram : and give it a variable name
 * 2. req.params.guyId
 * 3. use find hight order method to find the id your looking for
 * -use .find over the data
 * -inside .find create a function with a pram and have it return param._id === step2
 * 4. save the find method in a var and send it 
 */

/**
 * query data or filtering how ever you want to 
 * 
 * 1. in the route path you need to give the route
 * a path to get to the search 
 * you get to decide what that is called
 * 
 * 
 * 
 */

//get 1 (params)
goodguyRouter.get("/:guyId", (req, res)=>{
    const goodId = req.params.guyId
    const foundGuy = goodGuys.find(guy => guy._id === goodId)
    res.send(foundGuy)
})

//get by group
goodguyRouter.get("/lookup/last", (req,res)=>{
   const sirName = req.query.lastName
   const filteredGoodGuys = goodGuys.filter(guy => guy.lastName === sirName)
   res.send(filteredGoodGuys)
})

//post
goodguyRouter.post("/", (req, res)=>{
    const newGoodGuy = req.body
    goodGuys.push(newGoodGuy)
    res.send(newGoodGuy)
})

//delete one
/**
 * first you need to set a param var to get an id so you can remove it
 * find the index of the item that is equal to your var
 * splice the data at the item index, remove 1 items (look up splice for syntax)
 * send a message so you know it has been removed
 */

goodguyRouter.delete("/:guy", (req,res)=>{
    const guyId = req.params.guy
    const guyIndex = goodGuys.findIndex(saint => saint._id === guyId)
    goodGuys.splice(guyIndex, 1)
    res.send(`you have removed ${goodGuys.streetName} from the group!`)
})


//edit
goodguyRouter.put("/:guy", (req, res)=>{
    const guyId = req.params.guy
    const guyIndex = goodGuys.findIndex(saint => saint._id === guyId)
    const updateGuy = Object.assign(goodGuys[guyIndex], req.body)
    res.send(updateGuy)
})
module.exports = goodguyRouter