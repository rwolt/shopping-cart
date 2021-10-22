import '../styles/CartItem.css';

const CartItem = (props) => {
    return(
        <div className="cart-item">
            <div className="info-thumbnail-container">
                <img className="cart-product-thumbnail" src={props.image} alt={`{props.name} thumbnail`} />
                <div className="cart-product-info">
                    <p className="cart-product-name">{props.name} {props.color}</p>
                    <span className="cart-product-price">${props.price * props.quantity}</span>
                    <p
                        className="remove-button"
                        id={props.id}
                        onClick={props.handleRemove}>
                        REMOVE
                    </p>
                </div>
            </div>
            <div className="cart-product-quantity">{props.quantity}</div>
        </div>

    )
}

export default CartItem;