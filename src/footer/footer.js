import React from "react"
import "./footer.css"
import { LinksButton } from "./LinksOuter/LinkButtons"


export let Footer = () => {
    return (

        <div>
            <div className="Foot">
                <img src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png" width="70" height="70" alt="my logo" className="img"/>
                <div className="info"> Лучшие решения на каждый день </div>
                <div className="info2">Наш телефон для свзязи <p>+7-(999)-999-99-99</p>
                </div>
                <div className="info2"></div>
                <div className="linkedButton">
                    <LinksButton />
                </div>
            </div>
        </div>
    )
}