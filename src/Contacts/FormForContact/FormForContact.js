import React from "react"
import "./FormForContact.css"





export let FormShow = (props) => {
    if (!props.form) {
        return null
    }
    return (
        <div className = "FormForShow">
            <form method="post" className="new_form" className="Form">
                <p>
                    Ваше имя:<br/>
                <input type="text" name="name" title="Введите ваше имя" 
                placeholder="Имя" required className="inputText"></input>
                </p>
                <p className ="pmail">
                    Ваша почта:<br/>
                <input type="email" name="email"
                 placeholder="Почта" required className="inputEmail"></input>
                </p>
                <p className="parea">
                    Коментарий:<br/>
                <textarea name="mess"
                 placeholder="Ваши пожелания:" required className="inputTextArea"></textarea>
                </p>
                
                <input type="submit" name="submit" value="Отправить" className="inputButt"></input>
            </form>
        </div>
    )
}
export class FormForContacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showForm: false }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }
    handleToggleClick() {
        this.setState(state => ({
            showForm: !state.showForm
        }))
    }
    render() {
        return (
            <div>
                <FormShow form={this.state.showForm} />
                <span className="headinfo">Так же вы можете оставить заявку прямо на сайте:</span>
                <p> <button onClick={this.handleToggleClick}
                    className="infobutt">{this.state.showForm ? "Скрыть" : "Показать"}</button> </p>
            </div>

        )
    }
}





