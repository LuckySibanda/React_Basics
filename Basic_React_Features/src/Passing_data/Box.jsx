import React from "react";
import PropTypes from 'prop-types'

export default function Box(props) {




    // this is simpler change styles props.on to condition

    // const [condition, setCondition] = React.useState(props.on)

    // function toggleOn(){
    //     setCondition(prevState => prevState = !prevState)
    // }





    const styles = {
        backgroundColor: props.on ? "#222222" : "green",
        // backgroundColor: "black",
        cursor: "pointer"
    }

    return (
        <div style={styles} onClick={()=>props.handleClick(props.id)} className="box"></div>


        // simpler
        // <div style={styles} onClick={toggleOn} className="box"></div>
    )
}

Box.propTypes = {
    on: PropTypes.bool.isRequired,
    handleClick:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
};