import React, {Component} from 'react';
import SharedStyles from '../stylesheets/main.css';
import Styles from '../stylesheets/resume.css';

class Resume extends Component {
    render() {
        return (
            <div className='resume-container'>
                <h1>Resume</h1>
                <p className="resume-item">
                    <span className="resume-title">Vision Critical</span>
                    <span className="resume-timespan">Jan 2017 - Aug 2017</span>
                    <br/>
                    <span className="resume-item-description">Software Engineering Intern</span>
                    <span className="resume-location">Toronto, ON</span>
                </p>

                <ul classNameName="resume-list">
                    <li>
                    Developed and tested back-end software systems for the SaaS products of an industry leader in the cloud-based customer intelligence space using Web API oriented languages and tools such as C#, SQL, OracleDB, and Powershell
                    </li>
                    <li>
                    Implemented core functionality and deployment systems of an identity provider which leveraged new web service technologies
                    </li>
                    <li>
                    Constructed an internal tool using ASP.NET Web Forms to improve work efficiency of team members by consolidating all the endpoints of our systems into one easy-to-navigate UI
                    </li>
                    <li>
                    Enhanced the team status monitor with React.js to display additional statisitics and graphs on pipelines
                    </li>
                    <li>
                    Improved code coverage throughout each repository by constructing new unit, integration, and acceptance tests using Nunit
                    </li>
                </ul>
            </div>
        );
    }
}

export default Resume;