// import React from "react";
import PropTypes from 'prop-types';

export default function Counter(props) {
    

    return (
        <div>
                <div className="counter-count">{props.number}</div>
        </div>
    )
}


Counter.propTypes = {
    number: PropTypes.number.isRequired,
};