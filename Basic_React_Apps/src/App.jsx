import React from 'react'

import Card from "./components/card.jsx";
import { Exhibitions, MainProducts} from "./data/data.jsx"

export function App() {
    const FourProducts = Exhibitions.map(item =>{
        return (
            <Card 
                key={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                />
        )
    })

    const Products = MainProducts.map(product => {
        return (
            <Card 
                key={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                />
        )
    })


    return (
        <div>
            {FourProducts}
            {Products}
        </div>
    )
}

