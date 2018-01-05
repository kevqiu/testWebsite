import React, {Component} from 'react';
import SharedStyles from '../stylesheets/main.css';
import Styles from '../stylesheets/overview.css';
import Me from '../images/me.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <h1>Overview</h1>
                <div className='code-block-header'></div>                
                <div className='code-block'>
                    > Kevin.City <br/>
                    "Vancouver, BC" <br/><br/>

                    > Kevin.Education <br/>
                    "University of British Columbia" <br/><br/>

                    > Kevin.Major <br/>
                    "Bachelor of Applied Science - Computer Engineering" <br/><br/>

                    > Kevin.Graduation <br/>
                    "May 2019" <br/><br/>

                    > Kevin.Jobs.OrderByDescending(job => job.StartDate) <br/>
                    ["BuildDirect", "Vision Critical"] <br/><br/>

                    > Kevin.Skills.OrderByDescending(skill => skill.Experience).Take(5) <br/>
                    ["C#", "React", "Android", "Java", "C"] <br/><br/>

                    > Kevin.Hobbies <br/>
                    ["Mechanical Keyboards", "Board Games", "Sneakers"] <br/><br/>
                </div>
            </div>
        );
    }
}

export default About;