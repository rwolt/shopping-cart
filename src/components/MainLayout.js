import { Switch, Route } from 'react-router';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import ShoppingCart from './ShoppingCart';
import '../styles/MainLayout.css';

const MainLayout = (props) => {

    return(
        <div
            //If the cart should be show, apply the checkout class to the main layout and show the cart
            //Otherwise show the main layout without the cart
            className= {props.showCart ? "main-layout-checkout" : "main-layout"}>
                <div className="filter-container">
                </div>
                    <Switch>
                        <Route path="/" exact>
                            <Home
                                chronoPath={props.items[1].id}
                            />
                        </Route>
                        <Route path="/shop" exact>
                            <Shop
                                items={props.items}
                                cart={props.cart}
                                handleAdd={props.handleAdd}
                            />
                        </Route>
                        <Route path="/shop/:id">
                            <Product
                                items={props.items}
                                handleAdd={props.handleAdd}
                            />
                        </Route>
                    </Switch>


                <ShoppingCart
                    cart={props.cart}
                    totalPrice={props.totalPrice}
                    hideCart={props.hideCart}
                    handleRemove={props.handleRemove}
                    handleChange={props.handleChange}
                />
        </div>
    )
}

export default MainLayout;