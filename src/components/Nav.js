import { Link } from "react-router-dom";
import '../styles/Nav.css';
import CartButton from './CartButton';

const Nav = (props) => {
    return(
        <div className="nav-bar">
            <h1 className="title">
                <Link to="/">HARBoR</Link>
            </h1>
            <nav className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </nav>
            <CartButton
                unHideCart={props.unHideCart}
                totalItems={props.totalItems} />
        </div>
    )
}

export default Nav;