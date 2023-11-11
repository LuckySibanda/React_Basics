import React from "react";

export default function Memes() {

    const [meme, setMeme] = React.useState({
        memeName: "",
        memeRandom: ""
    })

    const [memeData, setMemeData] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(returnData => setMemeData(returnData.data.memes))

    }, [])

    function generateMeme() {
        const memesArray = memeData
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        const memeText = memesArray[randomNumber].name
        setMeme(prevReturnedData => ({
            ...prevReturnedData,
            memeRandom: url,
            memeName: memeText
        }))
    }

    // console.log(meme)

    return (
        <div>
            <button onClick={generateMeme}>Generate Meme</button>
            <div>
                <p>{meme.memeName}</p>
                <img src={meme.memeRandom} alt="meme image" />
            </div>
        </div>
    )
}