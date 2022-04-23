import React from "react"

function GoodGang(props){
    const {firstName, lastName, streetName, _id} = props
    return(
        <>
        <h1> {firstName}</h1>
        <h1> {lastName}</h1>
        <h1> {streetName}</h1>
        <button onClick={()=> props.delete(_id)}>delete</button>
        </>
    )
}
export default GoodGang