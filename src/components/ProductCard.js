import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = (props) => {
    const [hover, setHover] = useState('blur');

    const handleHoverFocus = (e) => {
        setHover('focus');
        e.currentTarget.classList.add('focus');
    }

    const handleHoverBlur = (e) => {
        setHover('blur');
        e.currentTarget.classList.remove('focus')
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
                </div>
            </div>
                <button
                    id={props.id}
                    onClick={props.handleAdd}
                    // className={hover==='focus' ? "add-to-cart-card" : "add-to-cart-card hidden"}>
                    className="add-to-cart-card hidden">
                    Add To Cart
                </button>
        </div>
    )
}

export default ProductCard;