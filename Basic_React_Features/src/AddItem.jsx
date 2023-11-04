import React from "react";

export default function Mapping () {

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function AddItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }

    // [...spread operator, returns all the items in the array and snce the prevThingsArray points to an array then it returns all the elements of thingsArray, therefore its a new array]
    // AddItem adds a new element to the array with "Thing x[y]"

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return(
        <div>
            <button onClick={AddItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}