import { useState } from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import ShoppingCart from './ShoppingCart';

const MainLayout = (props) => {

    return(
        <div className="main-layout">
            <Switch>
                <Route path="/" exact component={Home} />
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
            {props.showCart ?
                <ShoppingCart
                    cart={props.cart}
                    totalPrice={props.totalPrice}
                    hideCart={props.hideCart}
                    handleRemove={props.handleRemove}
                    handleCHange={props.handleChange}
                /> : ''}
        </div>
    )
}

export default MainLayout;