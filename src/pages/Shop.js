import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

const Shop = (props) => {

    const hideCart = () => {
        document.querySelector('.shopping-cart-container').style.display = "none";
    }

    return(
        <div className="shop-container">
            <div className="card-layout-container">
                {props.items.map(item => {
                        return (
                            <ProductCard
                                handleAdd={props.handleAdd}
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                size={item.size}
                                color={item.color}
                                price={item.price}
                                image={item.image}
                            />
                        )
                    })}
            </div>
            <div className="shopping-cart-container">
                <button
                    className="close-cart-button"
                    onClick={hideCart}>
                    X
                </button>
                <div className="shopping-cart">

                </div>
            </div>
        </div>
    )
}

export default Shop;