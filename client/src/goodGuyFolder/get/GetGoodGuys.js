import React, {useState, useEffect} from "react"
import axios from "axios"
import GoodGang from "./GoodGang"

function GetGoodGuys(props){
    const [goodGuys, setGoodGuys] = useState([])
    
    //get good guys
    function getGoodGuys(){
        axios.get("./goodGuys")
        .then(res => {
          const data = res.data
          setGoodGuys(data)
        })}

      useEffect(()=>{
          getGoodGuys()
        },[])

        //delete a good guy
    function removeGuy(deletedId){
      axios.delete(`/goodGuys/${deletedId}`)
      .then(res => res => {
        setGoodGuys(prevGuys => prevGuys.filter(guy => guy._id !== deletedId))
      })
      .catch(err => console.log("ress"))
      alert("you have deleted it")
    }

        const mappedGoodGuys = goodGuys.map(looper => <GoodGang {...looper} key={looper._id} delete={removeGuy}/>)
    return(
        <>
        {mappedGoodGuys}
        </>
    )
}

export default GetGoodGuys