// import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {

    // const [count, setCount] = React.useState(0)

    // setCount( () => {
    //     return count + 1
    // })

    return (
        <div className="card">
            <img src={`../../public/grid/${props.img}.png`} alt="product image" className="product--image" />
            <div className="product--info">
                <div className="product--name">
                    {props.name}
                </div>
                <div className="product--price">
                    {props.price}
                </div>
            </div>

            <div className="product--counter--container">
                <button className='sub--btn'>-</button>
                {/* <div className="prod--counter">{setCount}</div> */}
                <div className="prod--counter">0</div>
                <button className='add--btn'>+</button>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};



// need the ability to add the product to the cart, in that ability there needs to be away to add
// more than 1 product and a way to subtract the number of each product added tp the cart.
// for example, if you press the add to cart add one quantity of the product to the cart,
// if then you specify the quantity of each product and press add to quantity it will add the quantity
// specified