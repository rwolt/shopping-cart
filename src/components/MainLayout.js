import { Switch, Route } from 'react-router';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

const MainLayout = (props) => {
    return(
        <div className="main-layout">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop">
                    <Shop items={props.items} />
                </Route>
            </Switch>

        </div>
    )
}

export default MainLayout;