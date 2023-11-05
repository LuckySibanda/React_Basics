import PropTypes from 'prop-types';

export default function Body(props) {
    return (
        <div>
            <h1>Welcome back, {props.name}!</h1>
        </div>
    )
}

Body.propTypes = {
    name: PropTypes.string.isRequired,
};