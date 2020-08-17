import React from "react";
import './AboutMe.css';
import Work from "./AboutMeComponents/Work";
import Education from "./AboutMeComponents/Education";
import Skills from "./AboutMeComponents/Skills";
import resume from '../../Website_Resume.pdf'

class AboutMe extends React.Component {

    render() {
        return (
            <div className="about-container">

                <a className="view-resume-link" href={resume} target="_blank" style={{textDecoration: "none"}}>

                    <div className="view-resume-contianer">

                        <span>View Resume</span>

                    </div>

                </a>

                <div className="specific-components">

                    <Work />

                <div className="education-skills-container">

                    <Education />

                    <Skills />

                </div>

                </div>

            </div>
        );
    }
}

export default AboutMe;