import React from 'react'
import Counter from './Counter-state'
import Header from './Passing_data/Header'
import Body from './Passing_data/Body'
// import './App.css'

function App() {

    // Challange: Replace=ing a hard coded value with an initialized state with React.useState()

    // const result = React.useState('Hello')

    // becasue result returns an array with ['hell', f()] f() is a function

    // const [result, func] = React.useState("yes")

    // this is array destructering, the array is separeted into its parts, the value and the fucntion that sets the value

    const [isImportant, setIsImportant] = React.useState("yes")

    function handleClick() {
        setIsImportant("No")
        // React.useState provides a function that when called gives us the ability to change state or the value in the state, so here we're the value from "yes" to "no"
    }


    const [count, SetCount] = React.useState(0)

    function Add() {
        SetCount(function(OldValue) {
            return(OldValue + 1)
        })
    }
    // if we want to change the value of the oldstate into something new we pass in a function to the setter function, the setter function passes in the oldstate value as a parameter to the new function, the parameter issentially points to the oldstate value. the new funtion returns a new value for the parameter, but doesnt change the real of state.

    // SEE CALLBACK FUNCTION

    // All of this is done so that the callback function uses the oldvalue of state to determine the new value of state.
    // if you didnt need to determine the new value of state then you can just pass in the valeu like this to the setter function setCount(12)

    function Sub() {
        SetCount(prevCount => prevCount - 1)
    }

    // this a best practise to use suffix of "prev"
    // this is an arrow function 


    const [user, setUser] = React.useState("Lucky")

    return (
        <>

        <Header name={user} />
        <Body name={user} />


        <div className="state">
            <h4 className="state--title">IS this state important to know?</h4>
            <div onClick={handleClick}>
                <button>{isImportant}</button>
            </div>
        </div>

        <div className="counter">
            <button onClick={Sub} className="counter--minus">-</button>
                {/* <div className="counter-count">{count}</div> */}
                <Counter number={count} />
                <button onClick={Add} className='counter--plus'>+</button>
        </div>
        </>
    )
}

export default App