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

badguyRouter.get("/", (req, res) =>{
    res.send(badGuys)
})

badguyRouter.post("/", (req, res)=>{
    const newBadGuy = req.body
    badGuys.push(newBadGuy)
    res.send(`you have added ${newBadGuy.streetName} to the gang!`)
})

module.exports = badguyRouter