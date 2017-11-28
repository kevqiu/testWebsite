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
        path: '/resume',
        main: () => <About />
    },
    {
        path: '/skills',
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
    constructor(props) {
        super(props);
        this.state = {
            'about': false,
            'resume': false,
            'skills': false,
            'portfolio': false,
            'contact': false
        };
        this.clickSidebarLink = this.clickSidebarLink.bind(this);
    }

    componentWillMount() {
        let route = window.location.hash.substring(2);
        this.setState({
            [route]: true
        });
    }

    clickSidebarLink(link) {
        this.setState({
            'about': false,
            'resume': false,
            'skills': false,
            'portfolio': false,
            'contact': false
        });
        this.setState({
            [link]: true
        });
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
                                <li className={'sidebar-link' + (this.state['about'] ? '-bold' : '')} onClick={() => this.clickSidebarLink('about')}>About</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/resume">
                                <li className={'sidebar-link' + (this.state['resume'] ? '-bold' : '')} onClick={() => this.clickSidebarLink('resume')}>Resume</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/skills">
                                <li className={'sidebar-link' + (this.state['skills'] ? '-bold' : '')} onClick={() => this.clickSidebarLink('skills')}>Skills</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/portfolio">
                                <li className={'sidebar-link' + (this.state['portfolio'] ? '-bold' : '')} onClick={() => this.clickSidebarLink('portfolio')}>Portfolio</li>
                            </Link>
                            <br/>
                            <Link style={{textDecoration:'none'}} to="/contact">
                                <li className={'sidebar-link' + (this.state['contact'] ? '-bold' : '')} onClick={() => this.clickSidebarLink('contact')}>Contact</li>
                            </Link>
                            <br/>
                            <p id="credit">&#169; 2017 Kevin Qiu</p>
                        </ul>
                    </Col>
                    <Col id='main-component' xs={12} sm={8} md={7}>
                        <Home/>
                        {/* <Switch>
                        {routeDict.map((route, i) => (
                            <Route key={i} path={route.path} exact={route.exact} component={route.main} />
                        ))}
                        </Switch> */}
                    </Col>
                </div>
            </Router>
        );
    }
}

export default App;
