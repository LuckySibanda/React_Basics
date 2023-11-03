import React from 'react'
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

    return (
        <div className="stte">
            <h1 className="state--tit">IS this state important to know?</h1>
            <div onClick={handleClick}>
                <button>{isImportant}</button>
            </div>
        </div>
    )
}

export default App