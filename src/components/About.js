import React, {Component} from 'react';
import Styles from '../stylesheets/main.css';
import Me from '../images/me.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <img className='me-image' src={Me}/>
                <p>
                My name is Kevin Qiu and I am third year Computer Engineering student studying at the University of Britsh Columbia. 
                <br/><br/> 
                A bit of history as to why I decided to go into Computer Engineering: as a kid I was always interested in computers and technology in general. 
                I enjoyed building things, whether it be with LEGO or in a video game, and had a knack for coming up with the strangest creations. 
                In high school, I was part of a world-class VEX Robotics team, the Robosavages of Gladstone Secondary School. 
                This was my first glimpse into the world of programming and I instantly fell in love with the idea of bringing something I built to life with code. 
                <br/><br/> 
                Some of my hobbies include building keyboards, collecting board games, and exploring cities for the best food out there. 
                I also enjoy hiking and exploring
                nature whenever I get the chance to.
                </p>       
            </div>
        );
    }
}

export default About;