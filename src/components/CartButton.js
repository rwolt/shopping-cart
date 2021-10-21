const CartButton = (props) => {

    return(
        <div className="cart-counter">
            <button className="cart-button">Cart</button>
            <p>{props.totalItems}</p>
        </div>
    )
}

export default CartButton;