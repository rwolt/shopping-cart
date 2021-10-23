import '../styles/CartButton.css';

const CartButton = (props) => {

    return(
        <div className="cart-button"
            onClick={props.unHideCart}>
            <span className="cart-button-text">Cart</span>
            <div className="cart-counter">{props.totalItems}</div>
        </div>
    )
}

export default CartButton;