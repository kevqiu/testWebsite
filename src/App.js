import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import { Whoops404 } from './components/Whoops404';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Styles } from './stylesheets/app.css';

const routeDict = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        main: () => <About />
    },
    {
        path: '/portfolio',
        main: () => <Portfolio />
    },
    {
        main: () => <Whoops404 />
    }
];

class App extends Component {
    isSelectedRoute(route) {
        console.log('route is ' + window.location.hash === '#/' + route);
        return window.location.href.indexOf(route) !== -1;
    }

    render() {
        return (
            <Router>
                <div>
                    <Col className='sidebar' xsHidden sm={3} md={2} mdOffset={1}>
                        <ul>
                            <Link style={{textDecoration:'none'}} to="/">
                                <h2 className='sidebar-title' id='sidebar-first'>Kevin</h2>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/">
                                <h2 className='sidebar-title' id='sidebar-last'>Qiu</h2>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/about">
                                <li className={'sidebar-link' + (this.isSelectedRoute('about') ? '-bold' : '')} >About</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/portfolio">
                                <li className={'sidebar-link' + (this.isSelectedRoute('portfolio') ? '-bold' : '')} >Portfolio</li>
                            </Link>
                            <br/>
                            <p id="credit">&#169; 2017 Kevin Qiu</p>
                        </ul>
                    </Col>
                    <Col id='main-component' xs={12} sm={8} md={7}>
                        <Switch>
                        {routeDict.map((route, i) => (
                            <Route key={i} path={route.path} exact={route.exact} component={route.main} />
                        ))}
                        </Switch>
                    </Col>
                </div>
            </Router>
        );
    }
}

export default App;
