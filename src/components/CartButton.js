const CartButton = (props) => {

    const showCart = () => {
        document.querySelector('.shopping-cart-container').style.display = 'block';
    }

    return(
        <div className="cart-counter">
            <button
                className="cart-button"
                onClick={showCart}>Cart</button>
            <p>{props.totalItems}</p>
        </div>
    )
}

export default CartButton;