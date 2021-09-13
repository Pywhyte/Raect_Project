import React from "react"
import { Route } from "react-router"
import "./Cars.css"

let click = ()=>{
  
}

let Avatar = (props) => {
  return (
    <img className="Avatar" src={props.car.avatarUrl}
      alt={props.car.name}
      width="600"
      height="400" />
  )
}


export let CarBlock = (props) => {
 
  return (
    <div className="cars" onClick={click} >
      <div>
        <Avatar car={props.author} />
        <div className ="carName">{props.author.name}</div>
        <div className="carPrice">{props.author.price}</div>
      </div>
      <div className ="carAge">{props.author.age}</div>
      <div className="carText">{props.text}</div>
    </div>
  )

}





