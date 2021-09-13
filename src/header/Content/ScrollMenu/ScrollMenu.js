import React from "react"
import { CarBlock } from "../Cars/Cars"
import "./ScrollMenu.css"



export let ScrollMenu = (props) => {
    let carElem = props.cars.map(item => <CarBlock text={item.text} author={item.author} />)
    return (
        <div className="scrollmenu">
            {carElem}
        </div>
    )
}