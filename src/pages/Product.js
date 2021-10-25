import { useParams } from 'react-router';
import '../styles/Product.css';

const Product = (props) => {

    const params = useParams();
    const {id} = params;
    const item = props.items.filter(item => item.id === id)[0];

    return(
        <div className="product-container">
            <img className="product-image" src={item.image} />
            <div className="product-details">
                <h3 className="product-product-name">{item.name} - {item.size}</h3>
                <h2 className="product-product-color">{item.color}</h2>
                <h2 className="product-product-price">${item.price}.00</h2>
                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nibh pharetra justo convallis ullamcorper ac vel dui. Curabitur tincidunt turpis eget felis pulvinar, et dictum tellus sollicitudin. Aliquam vitae efficitur dui.  </p>
                <button
                    className="add-to-cart-product"
                    id={item.id}
                    onClick={props.handleAdd}>
                    <span className="button-text">Add to Cart</span>
                    <span className="button-price">{`$${item.price}.00`}</span>
                </button>
            </div>
        </div>
    )
}

export default Product;