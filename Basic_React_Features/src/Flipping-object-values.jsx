import React from "react";
import IsLiked from "./Flipping-object-values-component";

export default function Like() {
    // updating state, when state is an object
    // Spreading object

    const [contact, setContact] = React.useState({
        firstName: "John James",
        lastName: "Johnson jr",
        isFav: false
    })

    // let like = contact.isFav === true ? "Liked" : "No Like";

    // flipping the value of isFav so that the value of like changes when button is clicked

    function toggleFav() {

        // use a callback function, the prev state matters in determining the new state
        // used ({}) becasue {} is interpreted as function body opening instead of object
        setContact(prevState => ({
            // spread into object and change value of specified value
            ...prevState,
            // isFav is opposite of prevState.isFav
            isFav: !prevState.isFav
        }))
    }

    return (
        <div>
            <div>{contact.firstName}</div>
            <div>{contact.lastName}</div>
            {/* <button onClick={toggleFav}>{like}</button> */}

            {/* ======================================================= */}
            <IsLiked isFavourite={contact.isFav} handleClick={toggleFav}/>
            {/* this is giving the component the ability to  change the state, IsLiked is not an HTML element so you cannot pass a function to it, You pass in a prop that takes in the function and passes it to the component. */}
            
        </div>
    )
}