import React from "react";

// import Joke from "./Jokes";
// import { jokes } from "./Boxes";

// the above imports are above toggling on and off and element if two values are truthy or true: see 7:30:00

// nvm i did it with the show state


// CONDITIONAL RENDERING

export default function DisplayJoke() {
    const [messages, setMessages] = React.useState(["sup"])

    const [show, setShown] = React.useState(true)

    function toggleShow() {
        setShown(prevShow => !prevShow)
    }
    


    return (
        <div>
            {/* {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>} */}

            {messages.length > 0 ? 
            <h1>You have {messages.length} unread {messages.length === 1 ? "message" : "messages"}</h1> : 
            <h2>You are all caught up</h2>}

            {show && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad est debitis rerum. Impedit dolores maxime numquam, ipsum pariatur aliquid deleniti, nisi exercitationem incidunt ipsam id suscipit natus, debitis a quas.</p>}

            <button onClick={toggleShow}>{show ? "Close Messages" : "Read Messages"}</button>
        </div>
    )
}