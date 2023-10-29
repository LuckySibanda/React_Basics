import PropTypes from "prop-types";

export default function Satisfaction(props) {
    return (
        <section className="testimonials">
            <div className="card">
                <h4 className="customer--name">{props.CustomerName}</h4>
                <p>{props.CustomerQoute}</p>
            </div>
        </section>
    );
}

Satisfaction.propTypes = {
    CustomerName: PropTypes.string.isRequired,
    CustomerQoute: PropTypes.string.isRequired,
};
