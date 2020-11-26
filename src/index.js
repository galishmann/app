import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link,
} from 'react-router-dom';

import A from './components/A';
import B from './components/B';
import Items from './components/Items';


const app = (
    <BrowserRouter>
        <Link to="/items">Items</Link>
        <Switch>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
            <Route path="/items" component={Items} />
            <Redirect from="/" to="/a" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));