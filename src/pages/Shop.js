import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

const Shop = (props) => {

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
        </div>
    )
}

export default Shop;