import React from "react"
import "./buttons.css";

let Button = (props) => {
    return (
        <div className = "boxClick">
            <a className="click" href="/" >Главная</a>
            <a className="click"href="Company">Компания</a>
            <a className="click"href="Cars">Автопарк</a>
            <a className="click"href="Price">Условия</a>
            <a className="click"href="About">Контакты</a>
        </div>
    )
}

export default Button;