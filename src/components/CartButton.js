const CartButton = (props) => {

    return(
        <div className="cart-counter">
            <button
                className="cart-button"
                onClick={props.unHideCart}>Cart</button>
            <p>{props.totalItems}</p>
        </div>
    )
}

export default CartButton;