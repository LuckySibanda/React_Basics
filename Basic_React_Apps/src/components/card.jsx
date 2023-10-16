// import React from "react";

// export default function Card(props) {
//     return (
//         <div className="card">
//             <div className="card--name">{props.name}</div>
//             <div className="card--price">{props.price}</div>
//         </div>
//     )
// }

import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../assets/${props.img}.png`} alt="product image" className="product--image" />
            <div className="product--info">
                <div className="product--name">
                    {props.name}
                </div>
                <div className="product--price">
                    {props.price}
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};


// need a components folder with the card component, in that card import react, and props.
// Export card to the app.jsx file that imports the raw object data and maps it to the card component
//
