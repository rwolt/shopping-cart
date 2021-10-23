import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = (props) => {

    const button = <button id={props.id} onClick={props.handleAdd} className="add-to-cart-card">Add To Cart</button>
    const [hover, setHover] = useState('blur');

    const handleHoverFocus = (e) => {
        setHover('focus');
    }

    const handleHoverBlur = (e) => {
        setHover('blur');
    }

    const match = useRouteMatch();
    return(
        <div className="product-card-container"
             onMouseEnter={handleHoverFocus}
             onMouseLeave={handleHoverBlur}>
            <div className="product-product-box">
                <Link to={`${match.url}/${props.id}`}>
                    <img className="product-card-image" src={props.image} alt={`${props.name} ${props.color}`}/>
                </Link>
                <div className="product-product-info">
                    <p className="product-card-name">{props.name}  |  {props.size}</p>
                    <p className="product-card-color">{props.color}</p>
                    <p className="product-card-price">${props.price}.00</p>
                    {hover==='focus' ? button : ''}
                </div>
            </div>

        </div>
    )
}

export default ProductCard;