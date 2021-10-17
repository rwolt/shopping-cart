const ProductCard = (props) => {
    return(
        <div>
            <img src={props.image} alt={`${props.name} ${props.color}`}/>
            <p>{props.name} {props.size}</p>
            <p>{props.color}</p>
            <p>{props.price}</p>
            <button className="add-to-cart hidden">Add To Cart</button>
        </div>
    )
}

export default ProductCard;