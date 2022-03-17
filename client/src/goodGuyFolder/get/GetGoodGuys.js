import React, {useState, useEffect} from "react"
import axios from "axios"
import GoodGang from "./GoodGang"

function GetGoodGuys(props){
    const [goodGuys, setGoodGuys] = useState([])
    
    function getGoodGuys(){
        axios.get("./goodGuys")
        .then(res => {
          const data = res.data
          setGoodGuys(data)
        })}

      useEffect(()=>{
          getGoodGuys()
        },[])

        const mappedGoodGuys = goodGuys.map((looper, index)=>{
          return(
            <GoodGang
            realFirstName={looper.firstName}
            realLastName={looper.lastName}
            realGangName={looper.streetName}
            index={looper._id}
            />
          )
        })
    return(
        <>
        {mappedGoodGuys}
        </>
    )
}

export default GetGoodGuys