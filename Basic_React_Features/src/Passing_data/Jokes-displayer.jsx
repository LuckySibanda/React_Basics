import React from "react";

// import Joke from "./Jokes";
// import { jokes } from "./Boxes";

// the above imports are above toggling on and off and element if two values are truthy or true: see 7:30:00

export default function DisplayJoke() {
    const [messages, setMessages] = React.useState(["a", "b", "c"])

    
    


    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
        </div>
    )
}