import React, {Component} from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Routes from './routeConfig'
import {Col} from 'react-bootstrap';

import Construction from './components/Construction';
import {Styles} from './stylesheets/app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'home': false,
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
            'home': false,
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
                                <h2 className='sidebar-title' id='sidebar-first' onClick={() => this.clickSidebarLink('home')}>Kevin</h2>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/">
                                <h2 className='sidebar-title' id='sidebar-last' onClick={() => this.clickSidebarLink('home')}>Qiu</h2>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/about">
                                <li className={'sidebar-link' + (this.state['about'] ? ' bolded-link' : '')} onClick={() => this.clickSidebarLink('about')}>About</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/resume">
                                <li className={'sidebar-link' + (this.state['resume'] ? ' bolded-link' : '')} onClick={() => this.clickSidebarLink('resume')}>Resume</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/skills">
                                <li className={'sidebar-link' + (this.state['skills'] ? ' bolded-link' : '')} onClick={() => this.clickSidebarLink('skills')}>Skills</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/portfolio">
                                <li className={'sidebar-link' + (this.state['portfolio'] ? ' bolded-link' : '')} onClick={() => this.clickSidebarLink('portfolio')}>Portfolio</li>
                            </Link>
                            <Link style={{textDecoration:'none'}} to="/contact">
                                <li className={'sidebar-link' + (this.state['contact'] ? ' bolded-link' : '')} onClick={() => this.clickSidebarLink('contact')}>Contact</li>
                            </Link>
                            <br/>
                            <p id="credit">&#169; 2017 Kevin Qiu</p>
                        </ul>
                    </Col>
                    <Col id='main-component' xs={12} sm={8} md={7}>
                        {
                            window.location.href.indexOf('localhost') == -1 ? 
                            <Construction/> :
                            <Switch>
                            {Routes.map((route, i) => (
                                <Route key={i} path={route.path} exact={route.exact} component={route.main} />
                            ))}
                            </Switch> 
                        }
                    </Col>
                </div>
            </Router>
        );
    }
}

export default App;
