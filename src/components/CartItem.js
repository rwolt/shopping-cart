import '../styles/CartItem.css';

const CartItem = (props) => {
    return(
        <div className="cart-item">
            <div className="info-thumbnail-container">
                <img className="cart-product-thumbnail" src={props.image} alt={`{props.name} thumbnail`} />
                <div className="cart-product-info">
                    <p className="cart-product-name">{props.color}</p>
                    <span className="cart-product-price">${props.price * props.quantity}.00</span>
                    <p
                        className="remove-button"
                        id={props.id}
                        onClick={props.handleRemove}>
                        REMOVE
                    </p>
                </div>
            </div>
            <input
                className="cart-product-quantity"
                id={props.id}
                type="number"
                value={props.quantity}
                min={1}
                onChange={props.handleChange}
            />
        </div>

    )
}

export default CartItem;