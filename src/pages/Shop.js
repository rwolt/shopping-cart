import ProductCard from '../components/ProductCard';

const Shop = (props) => {
    console.log(props)
    return(
        <div className="shop-container">
            {props.items.map(item => {
                return (
                    <ProductCard
                        name={item.name}
                        size={item.size}
                        color={item.color}
                        price={item.price}
                        image={item.image}
                    />
                )
            })}
        </div>
    )
}

export default Shop;