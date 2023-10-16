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
            <div className="card--name">{props.name}</div>
            <div className="card--price">{props.price}</div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};


// need a components folder with the card component, in that card import react, and props.
// Export card to the app.jsx file that imports the raw object data and maps it to the card component
//
