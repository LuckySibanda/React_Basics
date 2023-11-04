// see React-state-2.jsx for relevance
import React from "react";

// get values from big data
export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: 'empty shit',
        bottomText: 'also empty',
        randomImage: "something LOL"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(["something else", "another thing", "one more thing"])

    function getMemeImage() {
        // state array
        const memesArray = allMemeImages
        // get Math.random is x therefore 0 =< x >= 1
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        // See Flipping-object-values.jsx
        setMeme(prevState => ({
            ...prevState,
            randomImage: memesArray[randomNumber]
        }))
        console.log(randomNumber)
    }

    return (
        <div>
            <div>{meme.topText}</div>
            <div>{meme.bottomText}</div>
            <button onClick={getMemeImage}>press me</button>
            <div>{meme.randomImage}</div>
        </div>
    )
}