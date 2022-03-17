import React, {useState} from "react"
import axios from "axios"
import AddGoodGuyForm from "./AddGoodGuyForm"

function AddGoodGuy(props){
  
  function postGoodGuy(newGuy){
    axios.post("/GoodGuys", newGuy)
    .then(res => console.log(res))
  }
    return(
        <>
          <AddGoodGuyForm postGuy={postGoodGuy}/>
        </>
    )
}
export default AddGoodGuy