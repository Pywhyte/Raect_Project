import React from "react"
import "./Contact.css"
import  { FormForContacts }  from "./FormForContact/FormForContact"

export let Contacts = (props) => {
    return (
        <div>
            <div className ="h2">
                <h2>НАШИ КОНТАКТЫ:</h2>
            </div>
            <div className="infoContainer">
            <div>
                <p className= "headinfo">Адрес:</p>
                <span className ="maininfo">Санкт-Петербург, Василеостровская</span>
            </div>
            <div>
                <p className= "headinfo">Режим Работы:</p>
                <p className ="maininfo"> Без выходных</p>
                <span className ="maininfo"> 08:00 - 22:00</span>
            </div>
            <div>
                <p className= "headinfo">Телефон:</p>
                <span className ="maininfo"> +7 (999) 999 99 99</span>
            </div>
            <div>
                <p className= "headinfo">Email:</p>
                <span className ="maininfo">Foo@Bar.com</span>
            </div>
            <div>
                {/* <FormShow form={this.state.showForm}/>
                <span className= "headinfo">Так же вы можете оставить заявку прямо на сайте:</span>
                <p> <button onClick={this.handleToggleClick} className ="infobutt">{this.state.showForm ? "Показать" : "Скрыть"}</button> </p> */}
<FormForContacts/>
            </div>
            </div>
            
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7993.299518840163!2d30.2797093!3d59.9433441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963125b981bb17%3A0x31620e280f23d816!2z0JLQsNGB0LjQu9C10L7RgdGC0YDQvtCy0YHQutCw0Y8!5e0!3m2!1sru!2sru!4v1630499933410!5m2!1sru!2sru"
                    width="1910" height="350" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}