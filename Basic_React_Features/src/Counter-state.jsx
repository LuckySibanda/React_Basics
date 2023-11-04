import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState

    function Add() {
        setCount(count + 1)
    }

    function Sub() {
        setCount(count - 1)
    }

    return (
        <div>
            <h3>0</h3>

            <button onClick={Add}>+</button>
            <div>{count}</div> 
            <button onClick={Sub}>-</button>
        </div>
    )
}