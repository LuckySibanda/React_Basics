// import React from 'react'

import Header from './components/header.jsx';
import MainBody from './components/Main-body.jsx';
import ExhibitionCard from './components/ExhibitionCard.jsx';
import Card from "./components/MainCard.jsx";
import { Exhibitions, MainProducts} from "./data/data.jsx"
// import Button from './components/add-to-cart.jsx';

export function App() {
    const FourProducts = Exhibitions.map(item =>{
        return (
            <ExhibitionCard
                key={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                fav={item.isFavourite}
                />
        )
    })

    const Products = MainProducts.map(product => {


        return (
            <Card 
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                fav={product.isFavourite}
                
                />
        )
    })


    return (
        <>
            <Header />
            <MainBody />
            <h1 className='products--title'>Recommended Products</h1>
            <div className="top--products">
                {FourProducts}
            </div>
            <h1 className='products--title'>All Products</h1>
            <div className="products--grid">
                {Products}
            </div>
        </>
    )
}

