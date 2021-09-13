import React from "react"
import "./LinkButtons.css"

export let LinksButton = () => {
    return (
        <div className="boxforlinks">
            <form action="https://github.com/Pywhyte" target="_blank">
                <button className="links" >
                    GitHub
                </button>
            </form>
            <form action="https://www.youtube.com/" target="_blank">
                <button className="link2">
                    YouTube
                </button>
            </form>
        </div>
    )
}