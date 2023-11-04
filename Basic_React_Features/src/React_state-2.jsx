import React from "react"
// needs data to work but the logic is correct

export default function ReactState () {
    const [memeImage, SetMemeImage] = React.useState('')

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        // memesArray[randomNumber].url
        SetMemeImage(memesArray[randomNumber].url)
        // setMemeImage sets the memeImage to that in its function body because we dont need the old value of state so we just set the memeImage
    }

    return (
        <div onClick={getMemeImage}>
            {memeImage}
        </div>
    )
}