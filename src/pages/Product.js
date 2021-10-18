import { useParams } from 'react-router';
import '../styles/Product.css';

const Product = (props) => {

    const params = useParams();
    const {id} = params;
    const item = props.items.filter(item => item.id === id)[0];
    console.log(item);

    return(
        <div className="product-container">
            <img className="product-image" src={item.image} />
            <div className="product-details">
                <h3 className="product-name">{item.name} {item.size}</h3>
                <h2 className="product-color">{item.color}</h2>
                <h2 className="product-price">{item.price}</h2>
                <button className="add-to-cart-product">Add to Cart</button>
            </div>

        </div>
    )
}

export default Product;