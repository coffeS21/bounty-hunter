import React, {useState, useEffect} from "react";
import axios from "axios"

function App() {


  useEffect(()=>{
    axios.get("./goodGuys")
    .then(res => console.log(res))
    .catch(err => console.log("there is a problem"))
  },[])
  return (
    <>

    </>
  )
}

export default App
