import CartItem from '../components/CartItem';
import shoppingCartImage from '../images/shopping-cart.png';
import '../styles/ShoppingCart.css';

const ShoppingCart = (props) => {
    return(
        <div className="shopping-cart-container">
            <div className="shopping-cart-header">
                <img className="shopping-cart-icon" src={shoppingCartImage} />
                <span className="shopping-cart-title">REVIEW YOUR CART</span>
                <button
                    className="close-cart-button"
                    onClick={props.hideCart}>
                </button>
            </div>

            <div className="shopping-cart">
                {props.cart.map(item => {
                    return(
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            color={item.color}
                            quantity={item.quantity}
                            price={item.price}
                            handleRemove={props.handleRemove}
                            handleChange={props.handleChange} />
                        )
                })}

            </div>
            <div className="order-total">
                <span className="order-total-text">Subtotal: </span>
                <span className="order-total-subtotal">${props.totalPrice}.00</span>
            </div>
            <button className="checkout-button">CHECKOUT</button>
        </div>
    )
}

export default ShoppingCart;