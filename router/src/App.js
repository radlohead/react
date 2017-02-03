import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './Container';
import { Home, About, Name, Work, Portfolio } from './Components';

const App = () => (
    <Router history={browserHistory}>
        <Router path="/" component={Container}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}>
                <Route path="name" component={Name} />
                <Route path="work" component={Work} />
            </Route>
            <Route path="portfolio(/:id)" component={Portfolio} />
        </Router>
    </Router>
);
export default App;
