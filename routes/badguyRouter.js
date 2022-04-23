const express = require("express")
const badguyRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const badGuys = [
    {firstName: "mike", lastName: "smith", living: true, killPrice: 500, streetName: "lil dino", _id: uuidv4()},
    {firstName: "frank", lastName: "black", living: true, killPrice: 1500, streetName: "stinky", _id: uuidv4()},
    {firstName: "steve", lastName: "green", living: true, killPrice: 5200, streetName: "tommy 2 toes", _id: uuidv4()},
    {firstName: "jim", lastName: "red", living: true, killPrice: 5500, streetName: "chip", _id: uuidv4()},
    {firstName: "stan", lastName: "purple", living: true, killPrice: 54300, streetName: "lil bluetooth", _id: uuidv4()},
    {firstName: "gill", lastName: "pitts", living: true, killPrice: 50, streetName: "tiny", _id: uuidv4()},
    {firstName: "magic", lastName: "james", living: true, killPrice: 1500, streetName: "lil ringtone", _id: uuidv4()},
    {firstName: "dilo", lastName: "luca", living: true, killPrice: 5500, streetName: "nba 3 point line", _id: uuidv4()},
    {firstName: "jeff", lastName: "davis", living: true, killPrice: 6600, streetName: "fires wit it", _id: uuidv4()},
    {firstName: "rico", lastName: "curry", living: true, killPrice: 5, streetName: "hut hut", _id: uuidv4()}
]

/**
 *  * 1. use the pram : and give it a variable name
 * 2. req.params.guyId
 * 3. use find hight order method to find the id your looking for
 * -use .find over the data
 * -inside .find create a function with a pram and have it return param._id === step2
 * 4. res.send
 */

badguyRouter.get("/", (req, res) =>{
    res.send(badGuys)
})

badguyRouter.get("/:thug", (req, res)=>{
    const badId = req.params.thug
    const foundThug = badGuys.find(thug => thug._id === badId)
    res.send(foundThug)
})

badguyRouter.get("/search/total",(req, res)=>{
    const tag = req.query.total
    const filteredAmount = badGuys.filter(guy=> guy.killPrice > 501? tag: console.log("test"))
    res.send(filteredAmount)
})

badguyRouter.post("/", (req, res)=>{

    const newBadGuy = req.body
    badGuys.push(newBadGuy)
    res.send(`you have added ${newBadGuy.streetName} to the gang!`)
})

badguyRouter.delete("/:guy",(req,res)=>{
    const guyId = req.params.guy
    const guyIndex = badGuys.find(devil => devil._id === guyId)
    badGuys.slice(guyIndex, 1)
    res.send(`you have removed a bad guy by the name of ${badGuys.streetName} from the gang`)
})

module.exports = badguyRouter