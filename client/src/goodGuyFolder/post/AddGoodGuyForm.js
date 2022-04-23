import React, {useState} from "react"

function AddGoodGuyForm(props){
const formData = {firstName :"", lastName: ""}
const [newGoodGuyInput, setNewGoodGuyInput] = useState(formData)

function handleChange(e){
    const {name, value} = e.target
    setNewGoodGuyInput(prevInput => ({...prevInput, [name]: value}))
  }

function handleSubmit(e){
    e.preventDefault()
    props.postGuy(newGoodGuyInput)
    setNewGoodGuyInput(formData)
  }
    return(
        <>
        <form onSubmit={handleSubmit}>    
            <input
            type="text"
            name= "firstName"
            value={newGoodGuyInput.firstName}
            onChange={handleChange}
            />
            <input
            type="text"
            name= "lastName"
            value={newGoodGuyInput.lastName}
            onChange={handleChange}
            />
            <button>enter</button>
        </form>
        </>
    )
}
export default AddGoodGuyForm