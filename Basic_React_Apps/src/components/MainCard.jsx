import React from 'react';
import PropTypes from 'prop-types';
// import { MainProducts } from '../data/data';
// import Button from './add-to-cart';
import { MainProducts } from '../data/data';

export default function Card(props) {

    // const x = MainProducts.map(btnPrd => {
    //     return (
    //             const key = btnPrd.id
    //             const id = btnPrd.id
    //     )
    // })

    // const [varx, setVar] = React.useState(MainProducts)

    // const imageToShow = varx.isFavourite ? "../../public/icon/heart-filled.svg" : "../../public/icon/heart.svg"

    

    function toggleFavStar() {
        if (yn === true) {
            yn = false
        }
        else {
            yn = true
        }
        console.log(yn)
    }

    let yn = props.fav

    const imageToShow = yn ? "../../public/icon/heart-filled.svg" : "../../public/icon/heart.svg"

    console.log(imageToShow)

    // function toggleFavStar() {
    //     setVar(preState => {
    //         if (preState.isFavourite === true) {
    //             preState.isFavourite = false
    //         }
    //         else {
    //             preState.isFavourite = true
    //         }

    //         console.log(preState.isFavourite)
    //     })

        
    // }

    const [count, setCount] = React.useState(0)

    function add() {
        setCount(count + 1)
    }

    function sub () {
        setCount(count - 1)
    }

    return (
        <div className="card">
            <img src={`../../public/grid/${props.img}.png`} alt="product image" className="product--image" />

            <div className="product--info">
                <div className="product--name">
                    {props.name}
                    <img className='fav-star' src={imageToShow} alt="" onClick={toggleFavStar} />
                </div>
                <div className="product--price">
                    {props.price}
                </div>

                <div className="product--counter--container">
                    <button className='sub--btn' onClick={sub}>-</button>
                    {/* <div className="prod--counter">{setCount}</div> */}
                    <div className="prod--counter">{count}</div>
                    <button className='add--btn' onClick={add}>+</button>
                </div>
                {/* {x} */}
            </div>

            
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    fav: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};



// need the ability to add the product to the cart, in that ability there needs to be away to add
// more than 1 product and a way to subtract the number of each product added tp the cart.
// for example, if you press the add to cart add one quantity of the product to the cart,
// if then you specify the quantity of each product and press add to quantity it will add the quantity
// specified