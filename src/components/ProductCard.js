import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = (props) => {
    const match = useRouteMatch();

    return(
        <div className="product-card-container">
            <Link to={`${match.url}/${props.id}`}>
                <img className="product-card-image" src={props.image} alt={`${props.name} ${props.color}`}/>
            </Link>
            <p className="product-card-name">{props.name} {props.size}</p>
            <p className="product-card-color">{props.color}</p>
            <p className="product-card-price">{props.price}</p>
            <button className="add-to-cart-card hidden">Add To Cart</button>
        </div>
    )
}

export default ProductCard;