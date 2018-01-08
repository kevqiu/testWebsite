import React, {Component} from 'react';
import SharedStyles from '../stylesheets/main.css';
import Styles from '../stylesheets/skills.css';

class Skills extends Component {
    render() {
        return (
            <div>
                <h1>Skills</h1>
                <div className='skills-list'>
                    <p className='skills-header'>Programming</p>
                    <div className='skills-item'>C#</div>
                    <div className='skills-item'>Android</div>
                    <div className='skills-item'>Java</div>
                    <div className='skills-item'>C</div>
                    <div className='skills-item'>SQL</div>
                    <div className='skills-item'>C++</div>
                    <div className='skills-item'>Python</div>
                </div>
                <div className='skills-list'>
                    <p className='skills-header'>Web</p>
                    <div className='skills-item'>React</div>
                    <div className='skills-item'>HTML</div>
                    <div className='skills-item'>CSS</div>
                    <div className='skills-item'>Node</div>
                    <div className='skills-item'>Angular 1.x</div>
                </div>
                <div className='skills-list'>
                    <p className='skills-header'>Hardware</p>
                    <div className='skills-item'>Arduino</div>
                    <div className='skills-item'>Raspberry Pi</div>
                    <div className='skills-item'>Verilog</div>
                    <div className='skills-item'>Assembly</div>
                </div>
                <p className='note'>* ordered by experience</p>
            </div>
        );
    }
}

export default Skills;