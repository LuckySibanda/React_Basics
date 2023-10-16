import React from 'react'

import Card from "./components/card.jsx";
import MainProduct from "./data/data.jsx"

export default function App () {


    const cards = products.map(product => {
        return (
            <Card
                key={product.name}
                name={product.name}
                price={product.price}
            />
        )

    })

    return (
        <div>
            {cards}
        </div>
    )
}

