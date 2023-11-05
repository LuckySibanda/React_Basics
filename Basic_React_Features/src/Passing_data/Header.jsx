import PropTypes from 'prop-types';

export default function Header(props) {
    return (
        <header>
            Current user: {props.name}
        </header>
    )
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
};