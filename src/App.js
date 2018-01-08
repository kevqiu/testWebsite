import React, {Component} from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Routes from './routeConfig'
import {Col} from 'react-bootstrap';

import Home from './components/Home';
import Construction from './components/Construction';
import {Styles} from './stylesheets/app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'home': true,
            'about': false,
            'resume': false,
            'skills': false,
            'portfolio': false,
            'contact': false
        };
        this.clickLink = this.clickLink.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
    }

    componentWillMount() {
        this.updateLocation();
    }

    clickLink(link) {
        this.setState({
            'home': false,
            'overview': false,
            'resume': false,
            'skills': false,
            'portfolio': false,
            'contact': false
        });
        this.setState({
            [link]: true
        });
    }

    updateLocation() {
        let route = window.location.hash.substring(2);
        if(route) {
            this.setState({
                [route]: true,
                'home': false
            });
        } else {
            this.setState({
                'home': true
            });
        }
    }

    render() {
        if (this.state['home']) {
            return (
                <Router>
                    <div className='main-menu'>
                        <ul>
                            <h1>Kevin Qiu</h1>
                            <div className='main-menu-line'/>
                            <p>Candidate for B.ASC Computer Engineering</p>
                            <p>University of British Columbia</p>
                            <div className='main-menu-line'/>
                            <Link
                                className={'sidebar-link' + (this.state['overview'] ? ' bolded-link' : '')} 
                                onClick={() => this.clickLink('overview')} 
                                to='/overview'
                            >
                            Overview
                            </Link>
                            <br/>
                            <Link
                                className='sidebar-link'
                                onClick={() => this.clickLink('resume')} 
                                to='/resume'
                            >
                            Resume
                            </Link>
                            <br/>
                            <Link
                                className='sidebar-link'
                                onClick={() => this.clickLink('skills')} 
                                to='/skills'
                            >
                            Skills
                            </Link>
                            <br/>
                            <Link
                                className='sidebar-link'
                                onClick={() => this.clickLink('portfolio')} 
                                to='/portfolio'
                            >
                            Portfolio
                            </Link>
                            <br/>
                            <Link
                                className='sidebar-link'
                                onClick={() => this.clickLink('contact')} 
                                to='/contact'
                            >
                            Contact
                            </Link>
                        </ul>
                    </div>
                </Router>
            )
        } else {
            return (
                <Router>
                    <div>
                        <Col className='sidebar' xsHidden sm={3} md={2} mdOffset={1}>
                            <ul>
                                {/* <h2 className='sidebar-title' id='sidebar-first'>Kevin</h2>
                                <h2 className='sidebar-title' id='sidebar-last'>Qiu</h2>
                                <Link style={{textDecoration:'none'}} to="/">
                                    <h2 className='sidebar-title' id='sidebar-last' onClick={() => this.clickLink('home')}>Qiu</h2>
                                </Link> */}
                                <Link
                                    className={'sidebar-link' + (this.state['overview'] ? ' bolded-link' : '')} 
                                    onClick={() => this.clickLink('overview')} 
                                    to='/overview'
                                >
                                {this.state['overview'] && '> '}
                                Overview
                                </Link>
                                <br/>
                                <Link
                                    className={'sidebar-link' + (this.state['resume'] ? ' bolded-link' : '')} 
                                    onClick={() => this.clickLink('resume')} 
                                    to='/resume'
                                >
                                {this.state['resume'] && '> '}
                                Resume
                                </Link>
                                <br/>
                                <Link
                                    className={'sidebar-link' + (this.state['skills'] ? ' bolded-link' : '')} 
                                    onClick={() => this.clickLink('skills')} 
                                    to='/skills'
                                >
                                {this.state['skills'] && '> '}
                                Skills
                                </Link>
                                <br/>
                                <Link
                                    className={'sidebar-link' + (this.state['portfolio'] ? ' bolded-link' : '')} 
                                    onClick={() => this.clickLink('portfolio')} 
                                    to='/portfolio'
                                >
                                {this.state['portfolio'] && '> '}
                                Portfolio
                                </Link>
                                <br/>
                                <Link
                                    className={'sidebar-link' + (this.state['contact'] ? ' bolded-link' : '')} 
                                    onClick={() => this.clickLink('contact')} 
                                    to='/contact'
                                >
                                {this.state['contact'] && '> '}
                                Contact
                                </Link>
                                <br/><br/>
                                <p id='credit'>&#169; 2017 Kevin Qiu</p>
                            </ul>
                        </Col>
                        <Col id='main-component' xs={12} sm={8} md={7}>
                        {
                            window.location.href.indexOf('localhost') == -1 ? 
                            <Construction/> :
                            <Switch>
                            {Routes.map((route, i) => (
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                            </Switch> 
                        }
                        </Col>
                    </div>
                </Router>
            );
        }
    }
}

export default App;
