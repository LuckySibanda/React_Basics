import React from 'react'
import './App.css'

function App() {

    const [x, setX] = React.useState(0)
    let [disp, setDisp] = React.useState('')

    function Add() {
        setX(x + 1)
    }

    function Sub() {
        setX(x - 1)
    }

    function Alert(){
        setDisp(()=> {
            disp = 'this is a display';

            alert(disp)
        })
    }


    return (
    <>
        <button onClick={Add}>+</button>
        <div>{x}</div>
        <button onClick={Sub}>-</button>

        <button onClick={Alert}>Press Me</button>
    </>
    )
}

export default App
