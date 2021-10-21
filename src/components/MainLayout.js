import { Switch, Route } from 'react-router';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/Product';

const MainLayout = (props) => {
    return(
        <div className="main-layout">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact>
                    <Shop
                        items={props.items}
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

        </div>
    )
}

export default MainLayout;