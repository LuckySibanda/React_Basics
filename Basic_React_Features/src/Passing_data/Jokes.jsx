import React from "react";
import { jokes } from "./Boxes";
import PropTypes from 'prop-types' 

export default function Joke(props) {



    return (
        <div>
            <h3>{props.setup}</h3>
            <p>{props.punchline}</p>
        </div>
    )
}

Joke.PropTypes = {

}