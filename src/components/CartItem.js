const CartItem = (props) => {
    return(
        <div>
            <img className="cart-product-thumbnail" src={props.image} alt={`{props.name} thumbnail`} />
            <div className="cart-product-info">
                <p className="cart-product-name">{props.name} {props.color}</p>
                <span className="cart-product-price">{props.price}</span>
            </div>
        </div>

    )
}

export default CartItem;