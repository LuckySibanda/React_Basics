import React from "react";

export default function Ternary() {

    // Replacing if/else with a ternary

    // const isGoingOut = false

    // let answer = isGoingOut === true ? "Yes" : "No"

    // if isGoingOut is true then set answer to "yes" if else false then "No"

    // let answer = isGoingOut ? "yes" : "no"

    // if isGoingOut is a truthy value then set answer to yes else if its Falsey set answer to No

    // ==============================================================


    const [isGoingOut, SetIsGoingOut] = React.useState(false)
    // state initialized with isGoingOut set to false

    function WhatsItGonnaBe() {
        SetIsGoingOut(prevState => prevState === true ? false : true)

        // setIsGointOut has a callback function that takes in presState as a parameter, IMPORTANT prevState is not isGoingOut rather it points to the value of isGoingOut
        // callback function askes if prevState is true, if true then flip is to false, else if false flip to true and it goes on like that
    }

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function opposite() {
        SetIsGoingOut(prevState => !prevState)
        // return opposite (!) of whateveer presState is 
    }
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    
    return (
        <div>
            <h1>
            Do I feel like it?
            </h1>
            <div>
                {/* {answer} */}
                {/* ================================================= */}

                {/* {isGoingOut ? "yes" : "no"} */}

                {/* instead of passing a value to the jsx markup I directly put the ternary in the jsx markup */}
                {/* ================================================== */}

                <button onClick={WhatsItGonnaBe}>Well?</button>
                {/* button calls fucntion when clicked which flips state value*/}


                <h3>{isGoingOut === true ? "yes" : "no"}</h3>
                {/* ternary in jsx asks if isGoingOut is true, if so then display "yes", else display "no" */}
            </div>
        </div>
        
    )
}