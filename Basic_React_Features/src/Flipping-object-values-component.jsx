import PropTypes from 'prop-types';

export default function IsLiked(props) {
    const show = props.isFavourite === true? "Liked" : "Not Liked"
    return (
        <button onClick={props.handleClick}>{show}</button>
    )
}


IsLiked.propTypes = {
    isFavourite: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
};

{/* <button onClick={props.handleClick}>{show}</button> */}

// This is the ability of a component to change state,