import PropTypes from 'prop-types';

export default function ExhibitionCard(props) {
    return (
        <div className="card">
            <img src={`../../public/Recommended/${props.img}`} alt="product image" className="product--image" />
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

ExhibitionCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};