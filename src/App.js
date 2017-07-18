import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Whoops404 } from './components/Whoops404';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Styles } from './stylesheets/sidebar.css'

const routeDict = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>Home!</div>,
        main: () => <Home />
    },
    {
        path: '/about',
        sidebar: () => <div>About!</div>,
        main: () => <About />
    },
    {
        path: '/portfolio',
        sidebar: () => <div>Portfolio!</div>,
        main: () => <Portfolio />
    },
    {
        sidebar: () => <div>Portfolio!</div>,
        main: () => <Whoops404 />
    }
];

const App = () => (
    <Router>
        <div>
            <div className='sidebar col-sm-2'>
                <ul>
                    <h2 className='sidebar-first'>Hello</h2>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
                <Switch>
                {routeDict.map((route, i) => (
                    <Route key={i} path={route.path} exact={route.exact} component={route.sidebar} />
                ))}
                </Switch>
            </div>
            <div className='col-sm-6'>
                <Switch>
                {routeDict.map((route, i) => (
                    <Route key={i} path={route.path} exact={route.exact} component={route.main} />
                ))}
                </Switch>
            </div>
            <div> <button type="button" className="btn btn-success">Basic</button> </div>
        </div>
    </Router>
);

export default App;
