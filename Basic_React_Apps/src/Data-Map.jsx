import React from 'react'

import Card from "./card.jsx";
import products from "./data.jsx";

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

