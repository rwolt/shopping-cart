import CartItem from '../components/CartItem';
import '../styles/ShoppingCart.css';

const ShoppingCart = (props) => {
    return(
        <div className="shopping-cart-container">
            <button
                className="close-cart-button"
                onClick={props.hideCart}>
                X
            </button>
            <div className="shopping-cart">
                {props.cart.forEach(item => {
                    return(
                        <CartItem
                            name={item.name}
                            color={item.color}
                            price={item.price} />
                        )
                })}
            </div>
        </div>
    )
}

export default ShoppingCart;