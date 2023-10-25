import React from 'react';
import PropTypes from 'prop-types';
// import { MainProducts } from '../data/data';
// import Button from './add-to-cart';
import { MainProducts } from '../data/data';

export default function Card(props) {

    // const [prod, setProd] = React.useState(MainProducts);
    // const [cart, setCart] = React.useState([]);
    // const itemId = prod[0].id; // Assuming you want to work with the first product in prod

    // function addToCart() {
    //     const matchingItem = cart.find((item) => item.prodId === itemId);

    //     if (matchingItem) {
    //         const updatedCart = cart.map((item) =>
    //         item.prodId === itemId
    //             ? { ...item, quantity: item.quantity + 1 }
    //             : item
    //         );
    //         setCart(updatedCart);
    //     } else {
    //         setCart([...cart, { prodId: itemId, quantity: 1 }]);
    // }
    // }

    // console.log(cart);


    // const [prod, setProd] = React.useState(MainProducts);

    // const itemId = prod.id;

    // const [cart, setCart] = React.useState([])

    // function addToCart() {
    //     let matchingItem;
    //     setCart(cart.map(item => {
    //         if (itemId === item.prodId) {
    //             matchingItem = item
    //         }
    //     if (matchingItem) {
    //         matchingItem.quantity + 1
    //     }
    //     else {
    //         cart.push({
    //             prodId: itemId,
    //             quantity: 1
    //         })
    //     }
        
    //     // return matchingItem
        
        
    //     // else {
    //     //     cart.push({

    //     //     })
    //     // }
    //     }))
    // }

    // console.log(cart);

    // addToCart();



    const [varx, setVar] = React.useState(MainProducts)

    let imageToShow = varx.isFavourite ? "../../public/icon/heart-filled.svg" : "../../public/icon/heart.svg"

    // if (varx.isFavourite) {
    //     imageToShow = "../../public/icon/heart-filled.svg";
    // }
    // else {
    //     imageToShow = "../../public/icon/heart.svg";
    // }

    // console.log(imageToShow)

    function toggleFavStar() {
        setVar(prevState => {
          return {
            ...prevState,
            isFavourite: !prevState.isFavourite
          };
        });
    
        // console.log(setVar);
    }




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
                {/* <button onClick={addToCart}>Cart</button> */}
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